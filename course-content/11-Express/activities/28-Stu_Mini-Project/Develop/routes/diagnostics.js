const diagnostics = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");

// GET Route for retrieving diagnostic information
diagnostics.get("/", (req, res) => {
  // * It's done when I have created a GET route for `/api/diagnostics` that will return the content of `db/diagnostics.json`.
  readFromFile("./db/diagnostics.json").then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
diagnostics.post("/", (req, res) => {});
// It's done when I have created a POST route for `/api/diagnostics` that will store information about the invalid form submissions.
module.exports = diagnostics;
