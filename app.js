const express = require("express");
const app = express();

//for loading .env contents
const dotenv = require("dotenv");
dotenv.config();

//importing function to calculate sum
const { arraySum } = require("./functions/array");

//created a sample array
const demoArray = [1, 3, 5, 7];

//for displaying result on homepage
app.get("/", (req, res) => {
  res.json(arraySum(demoArray));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
