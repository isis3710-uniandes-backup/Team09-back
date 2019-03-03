'use strict';
module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define('Messages', {
    msgId: {type:DataTypes.INTEGER, primaryKey:true},
    user: DataTypes.STRING,
    msg: DataTypes.STRING,
    timestamp:DataTypes.DATE,
    chatId: DataTypes.INTEGER
  }, {timestamps: false});

  return Messages;
};