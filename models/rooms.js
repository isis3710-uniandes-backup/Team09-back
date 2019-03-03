'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define('Rooms', {
    roomId: {type:DataTypes.INTEGER, primaryKey:true},
    name: DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {timestamps: false});

  return Rooms;
};