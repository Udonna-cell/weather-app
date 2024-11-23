var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const sass = require("sass");

/* GET home page. */
router.get("/", function (req, res, next) {
  // Specify the file path
  const filePath = path.join(__dirname, "../public/stylesheets/style.css");
  let css = sass.compile(path.resolve(__dirname, "../sass/style.scss")).css;


  try {
    // Check if the file exists by trying to access it
    fs.accessSync(filePath, fs.constants.F_OK);
    try {
      fs.writeFileSync(filePath, css);
      console.log("File created successfully!");
    } catch (err) {
      console.error("Error creating the file:", err);
    }
    console.log("File already exists.");
  } catch (err) {
    // If the file doesn't exist, create it
    try {
      fs.writeFileSync(filePath, css);
      console.log("File created successfully!");
    } catch (err) {
      console.error("Error creating the file:", err);
    }
  }
  res.render("index", { title: "Express" });
});

module.exports = router;
