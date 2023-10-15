const express = require("express");
const router = express.Router();
const db = require("../models/index");

router.get("/createStudents", async (req, res) => {
  try {
    const students = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        points: 33,
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        points: 35,
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        points: 42,
      },
      {
        firstName: "Bob",
        lastName: "Wilson",
        email: "bob.wilson@example.com",
        points: 222,
      },
    ];

    await db.sequelize.getQueryInterface().bulkInsert("Students", students);

    res.send("Students created successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error when creating students.");
  }
});

module.exports = router;
