const fs = require("fs");

async function wordCount(data) {
  try {
    const data = fs.readFile("data", "utf-8");
    const words = data.split(/\s+/).filter((word) => word.trim() !== "");
    console.log("Total number of words:", words.length);
  } catch (error) {
    console.error("Error reading the file:", error.message);
  }
}

module.exports = { wordCount };
