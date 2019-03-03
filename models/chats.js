'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chats = sequelize.define('Chats', {
    chatId: {type:DataTypes.INTEGER, primaryKey:true},
    roomId: DataTypes.INTEGER,
  }, {timestamps: false});

  return Chats;
};