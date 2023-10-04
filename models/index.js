const dbConfig = require("../config/db.config.js");
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance with database configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Import Sequelize models for Student, Instructor, Course, and Enrollment
const StudentModel = require("../models/student");
const InstructorModel = require("../models/instructor");
const CourseModel = require("../models/course");
const EnrollmentModel = require("../models/enrollment.js")

// Create instances of models using the Sequelize instance
const Student = StudentModel(sequelize);
const Instructor = InstructorModel(sequelize);
const Course = CourseModel(sequelize);
const Enrollment = EnrollmentModel(sequelize);

// Create an empty object 'db' to hold model instances
const db = {};

// Assign Sequelize and Sequelize instance to the 'db' object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model: Assign Sequelize models to the 'db' object
db.course = require("../models/course.js")(sequelize, Sequelize);
db.student = require("../models/student.js")(sequelize, Sequelize);
db.enrollment = require("../models/enrollment.js")(sequelize, Sequelize);
db.Instructor = require("../models/instructor.js")(sequelize, Sequelize);

module.exports = db;
