const { Country, Activity } = require('../db.js')

const createActivity=async (req,res)=>{
    const {nombre, dificultad, temporada, duracion, countries} = req.body;
    try{
        const nuevaActividad = await Activity.create({
            nombre,
            dificultad,
            temporada,
            duracion
        });

        if(countries && countries.length){
            countries.forEach(async (pais) => {
                const country = await Country.findByPk(pais.id)
                await country?.addActivity(nuevaActividad)
            });
        }
        else{
            await Country.addActivity(nuevaActividad)
        }

    res.status(201).json({activity:nuevaActividad})

    }
    catch (error){
    if (!nombre || !dificultad || !duracion || !temporada)
        res.status(400).json({ message: 'Falta la información necesaria para crear una actividad.' })
  
      else if (error.message.includes('llave duplicada') || error.message.includes('Validation error'))
        res.status(400).json({ message: `No se puede crear la actividad. Ya existe una con el nombre "${nombre}"` })
      
      else 
        res.status(500).json({ message: error.message })
    }
}


const traerActividades = async(req,res)=>{
    try{
        const activities = await Activity.findAll({
            include: {
                model: Country,
                through: { attributes: [] },
                as: "countries"
            },
            attributes: { exclude: [ "createdAt", "updatedAt" ] }
        })
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports={
    createActivity, traerActividades
}