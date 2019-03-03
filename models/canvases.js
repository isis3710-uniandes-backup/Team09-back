'use strict';
module.exports = (sequelize, DataTypes) => {
  const Canvases = sequelize.define('Canvases', {
    canvasId: {type:DataTypes.INTEGER, primaryKey:true},
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    roomId: DataTypes.INTEGER
  }, {timestamps: false});

  return Canvases;
};