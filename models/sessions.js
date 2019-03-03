'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sessions = sequelize.define('Sessions', {
    sessionId: {type:DataTypes.INTEGER, primaryKey:true},
    userId: DataTypes.INTEGER,
    startTime:DataTypes.DATE,
    endTime:DataTpes.TEXT
  }, {timestamps: false});

  return Sessions;
};