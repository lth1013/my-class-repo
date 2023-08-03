// Dependencies

const { debug } = require("console");
var express = require("express");
var mysql = require("mysql2");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates MySQL connection

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "1234",
    database: "movie_db",
  },
  console.log(`Connected to the movie_db database.`)
);

// Routes

// It's done when a `GET` request to the `/api/movies` route renders a list of all movies.

app.get("/api/movies", function (req, res) {
  db.query("SELECT * FROM movies", function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

// It's done when a `GET` request to the `/api/movie-reviews` route renders a list of all reviews with movie data.

app.get("/api/movie-reviews", function (req, res) {
  db.query("SELECT * FROM reviews", function (err, data) {
    if (err) throw err;
    res.json(data);
  });
});

// It's done when a `POST` request to the `/api/add-movie` route successfully adds a movie when tested using Insomnia.

app.post("/api/add-movie", function (req, res) {
  db.query(
    "INSERT INTO movies (movie_name) VALUES ('Unforgiven')",
    req.body,
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
});

// It's done when a `PUT` request to the `/api/review/:id` route successfully updates a movie review when tested using Insomnia.

app.put("/api/review/:id", function (req, res) {
  db.query(
    "UPDATE reviews SET review = 'My favorite movie!' WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.json(result);
    }
  );
});

// It's done when a `DELETE` request to `/api/movie/:id` route deletes a route when tested using Insomnia.

app.delete("/api/movie/:id", function (req, res) {
  db.query(
    "DELETE FROM movies WHERE id = ?",
    [req.params.id],
    function (err, result) {
        if (err) throw err;
        res.json(result);
    }
  );
});

// Starts the server to begin listening

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
