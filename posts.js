const db = require("./models/db");

db.connection;

module.exports = (app, db) => {
  app.post("/category/posts/create", (req, res) => {
    const title = req.body.title;
    const postBody = req.body.postBody;

    db.query(
      "INSERT INTO post (title, post_body) VALUES (?,?)",
      [title, postBody],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("values inserted");
        }
      }
    );
  });

  app.get("/category/posts/show", (req, res) => {
    db.query("SELECT * FROM post", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/category/posts/edit", (req, res) => {
    db.query(
      "UPDATE post SET title = ?, post_body = ? WHERE id = ?",
      [title, postBody, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });
};
