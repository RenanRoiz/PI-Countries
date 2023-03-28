const {DataTypes} = require ("sequelize");


Activity = (sequelize)=>{
    sequelize.define("Activity", {
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        dificultad:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                min: 1,
                max: 5
            }
        },
        temporada:{
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            allowNull: false
        },
        duracion:{
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 24
            }
        }
    })
}

module.exports=Activity;