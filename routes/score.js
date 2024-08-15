const mongoose = require("mongoose");
const Account = mongoose.model("accounts");

module.exports = (app) => {
  // Routes
  app.post("/account/updateScore", async (req, res) => {
    const { rUsername, rScore } = req.body;
    var userAccount = await Account.findOne(
      { username: rUsername },
      "username score"
    );

    if (userAccount != null) {
      userAccount.score = rScore;
      await userAccount.save();
      res.send({ code: 0, msg: "Score updated successfully" });
    } else {
      res.send({ code: 1, msg: "User not found" });
    }
  });
};
