module.exports = (app) => {
  // Routes
  app.get("/home", async (req, res) => {
    res.send("HelloWorld");
  });
};
