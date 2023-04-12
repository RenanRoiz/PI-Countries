const axios = require('axios');
const {Country} = require('../db');

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


const getAllCountriesController = async () => {
     //La primera vez que llame a la API va a estar vacía, asi que hay que tener cuidado
     if (await Country.count()===0){
        const countries = await traerCountries();
        await Country.bulkCreate(countries); //bulkCreate nos permite ingresar muchos registros con un solo llamado
        return countries;
    }
    else{
        countries=await Country.findAll()
        return countries;
    }
    
   
}
const countryByIdController = async (id) => {
    const country = await Country.findByPk(id.toUpperCase(),{
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
    });
    return country;
}
const searchCountryByNameController = async(name) => {
    const countryByName =  await Country.findAll({where: {name:name}});
    return countryByName;
}


module.exports = {
    getAllCountriesController,
    countryByIdController,
    searchCountryByNameController
}