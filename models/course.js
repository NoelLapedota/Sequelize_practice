const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Course = sequelize.define('Course', {
    courseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Course.belongsToMany(sequelize.models.Student, { through: 'Enrollment', foreignKey: 'courseId' });
  Course.belongsTo(sequelize.models.Instructor, { foreignKey: 'instructorId' });

  return Course;
};
