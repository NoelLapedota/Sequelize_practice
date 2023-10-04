const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Enrollment = sequelize.define('Enrollment', {
    studentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    courseId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });

  Enrollment.belongsTo(sequelize.models.Student, {
    foreignKey: 'studentId',
    onDelete: 'CASCADE',
  });

  Enrollment.belongsTo(sequelize.models.Course, {
    foreignKey: 'courseId',
    onDelete: 'CASCADE',
  });

  return Enrollment;
};