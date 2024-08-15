const express = require("express");
//const keys = require("./config/keys");
const cors = require("cors"); // Importing the CORS package
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*", // Allows all origins - use this only during development
    methods: "GET,POST",
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

// Setting up DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURI);

// Setup database models
require("./model/Account");

// Setup the routes
require("./routes/authenticationRoutes")(app);
require("./routes/leaderboard")(app);
require("./routes/score")(app);
require("./routes/home")(app);

app.listen(process.env.PORT, () => {
  console.log("Server listining on port 13756");
});
