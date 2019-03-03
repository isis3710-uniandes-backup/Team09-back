'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actions = sequelize.define('Actions', {
    actionId: {type:DataTypes.INTEGER, primaryKey:true},
    userId: DataTypes.INTEGER,
    canvasId: DataTypes.INTEGER,
    svgPath: DataTypes.STRING,
    time: DataTypes.DATE,
    sesionId: DataTypes.INTEGER
  }, {timestamps: false});

  return Actions;
};