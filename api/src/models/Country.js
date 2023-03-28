const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


Country = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3), //El ID debe tener 3 letras
      allowNull: false,
      primaryKey: true //El ID es nuestra clave primaria
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera:{
      type: DataTypes.STRING,
      allowNull: false
    },
    continente:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false
    },
    poblacion:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subregion:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.INTEGER
    },
  },{
    timestamps: false /*Evitamos que sequelize agregue automáticamente los campos de marca de tiempo 
    //"createdAt" y "updatedAt" a la tabla de base de datos*/
  });
};

module.exports=Country;