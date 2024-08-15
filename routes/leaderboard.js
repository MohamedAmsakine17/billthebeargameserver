const mongoose = require("mongoose");
const Account = mongoose.model("accounts");

module.exports = (app) => {
  // Routes
  app.get("/leaderboard", async (req, res) => {
    try {
      const leaderboard = await Account.find({}, "username score")
        .sort({ score: 1 }) // Sort by score in descending order
        .limit(10); // Limit to top 10 players

      res.send(leaderboard);
    } catch (err) {
      res
        .status(500)
        .send({ error: "An error occurred while fetching the leaderboard." });
    }
  });
};
