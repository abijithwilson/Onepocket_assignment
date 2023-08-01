const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const fs = require("fs").promises;

//function to print number of words in txt file
async function wordCount() {
  try {
    const data = await fs.readFile("./content/data.txt", "utf-8");
    const words = data.split(/\s+/).filter((word) => word.trim() !== "");
    console.log("Total number of words:", words.length);
  } catch (error) {
    console.error("Error reading the file:", error.message);
  }
}

wordCount();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
