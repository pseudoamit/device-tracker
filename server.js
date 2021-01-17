const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const keys = require("./src/config/keys");
const deviceRouter = require("./src/routes/device");

const app = express();

app.use(express.json());
app.use(cors());
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the Database"))
  .catch(() => {
    console.log("Error connecting the database");
  });

app.use("/device", deviceRouter);

app.listen(5000, () => {
  console.log("Server has started at 5000 PORT");
});
