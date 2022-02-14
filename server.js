const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const posts = require("./posts");

const app = express();
app.use(cors());
app.use(express.json());

posts(app);

//db connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mvc_test",
});

//create categories

app.post("/create", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  db.query(
    "INSERT INTO category (name, description) VALUES (?,?)",
    [name, description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

//show categories

app.get("/category", (req, res) => {
  db.query("SELECT * FROM category", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// edit categories
app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;

  db.query(
    "UPDATE category SET name = ?, description = ? WHERE id = ?",
    [name, description, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//delete categories

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
