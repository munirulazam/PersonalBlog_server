module.exports = (app) => {
  app.get("/category/posts/", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
};
