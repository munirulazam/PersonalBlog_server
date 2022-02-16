const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const posts = require("./posts");
const category = require("./category");
const db = require("./models/db");

const app = express();
app.use(cors());
app.use(express.json());

// posts(app);

//db connection

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "mvc_test",
// });

posts(app, db);
category(app, db);

//checking server

app.listen(3001, () => {
  console.log("server running");
});

// db.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("db connected");
//   }
// });

module.exports = db;
