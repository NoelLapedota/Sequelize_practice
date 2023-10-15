require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./models/index");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

const new_students = require("./routing/new_students");
const ranking = require('./routing/ranking')

db.sequelize
  // Synchronize the model with the database
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const migration = async (db) => {
  try {
    const migrationFile = require("./models/migrations/add-level-to-course");

    await migrationFile.up(db.sequelize.getQueryInterface(), db.Sequelize);

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Error during migration:", error);
  }
};

//call migration
migration(db);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1", new_students);
app.use("/api/v1", ranking);


// simple route
app.get("/", (req, res) => {
  console.log("db is" + db);

  res.json({ message: "Welcome to bezkoder application." });
});













// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = db;
