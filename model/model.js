const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("UserTables",
      {Name: DataTypes.STRING,
      Number: DataTypes.INTEGER},
      { timestamps: false }
      );
    return user;
  };