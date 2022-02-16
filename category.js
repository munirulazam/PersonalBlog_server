const db = require("./models/db");

db.connection;

module.exports = (app, db) => {
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
};
