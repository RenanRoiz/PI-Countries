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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgFlag:{
      type: DataTypes.STRING,
      //allowNull: false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.REAL,
      allowNull: false
    },
  },{
    timestamps: false /*Evitamos que sequelize agregue automáticamente los campos de marca de tiempo 
    //"createdAt" y "updatedAt" a la tabla de base de datos*/
  });
};

module.exports=Country;