const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Instructor = sequelize.define('Instructor', {
    instructorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
    },
  });

  return Instructor;
};