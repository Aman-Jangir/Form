const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("newTable",
      {Name: DataTypes.STRING,
      Number: DataTypes.INTEGER},
      { timestamps: false }
      );
    return user;
  };