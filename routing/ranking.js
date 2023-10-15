const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/ranking", async (req, res) => {
  try {
    const students = await db.student.findAll({
      where: {
        points: {
          [db.Sequelize.Op.gt]: 50, // Greater than 50
          [db.Sequelize.Op.lt]: 450, // Less than 450
        },
      },
      limit: 2, // Limit to 2 results
    });

    if (students.length === 0) {
      // Handle the case where no students meet the criteria.
      return res
        .status(404)
        .json({ message: "No students found with the desired score range." });
    }

    res.json(students);
  } catch (error) {
    // Handle generic errors.
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
});

module.exports = router;
