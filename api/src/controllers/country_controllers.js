const { Country, Activity } = require('../db.js')
const axios = require('axios')
const { Op } = require("sequelize");


const traerCountries = async ()=>{
    try{
        const response = await axios.get("https://restcountries.com/v3/all");
        const countries = response.data.map(pais=>{
            return{
                id: pais.cca3,
                name: pais.name.common,
                imgFlag: pais.flags[1], //La 2da, o sea, la 1 está en PNG
                continent: pais.continents[0],
                capital: pais.capital != null ? pais.capital[0] : "No data",
                population: pais.population,
                subregion: pais.subregion,
                area: pais.area
            }
        })

        return countries;
    }
    catch(error){
        throw new Error (error);
    }
}



const getOneCountry = async (req,res)=>{
    const {id}= req.params;
    try{
        const pais= await Country.findByPk(id.toUpperCase(),{
            attributes: [
                "id",
                "name",
                "imgFlag",
                "continent",
                "population",
                "capital",
                "subregion",
                "area",
              ],
            include: [{
                model: Activity,
                attributes: { exclude: [ "createdAt", "deletedAt", "updatedAt" ] },
                through: { attributes: [] },
                as: "activities"
            }]
        });
        res.status(200).json(pais)
    }
    catch(error){
        res.status(500).json({message:error.message}) //No quiero poner el 404 porque acá sería Server Error
    }

}

const getCountries = async (req,res)=>{
    const {nombre}=req.query;
    try{
        //La primera vez que llame a la API va a estar vacía, asi que hay que tener cuidado
        if (await Country.count()===0){
            const countries = await traerCountries();
            await Country.bulkCreate(countries); //bulkCreate nos permite ingresar muchos registros con un solo llamado
        }
        const includeActivityModel = [{
            model: Activity,
            through: { attributes: [] },
            as: "activities",
            attributes: { exclude: ["deletedAt", "updatedAt", "createdAt"] }
        }]
        //Si ya había datos:
        const reqCountries = nombre
        ? await Country.findAll({where: { nombre: { [Op.match]: nombre }}, include: includeActivityModel })
        : await Country.findAll({include: includeActivityModel})

        res.status(200).json({countries:reqCountries})

    }
    catch(error){
        res.status(500).json({message: error.message})
        console.log(error)
    }
}


module.exports={
    getCountries, getOneCountry
}
