DROP DATABASE IF EXISTS movie_db;

CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    movie_name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT,
    movie_id INT NOT NULL,
    review TEXT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE
);

INSERT INTO
    movies (movie_name)
    
VALUES
    ("The Avengers"),
    ("The Avengers: Age of Ultron"),
    ("The Avengers: Infinity War"),
    ("The Avengers: Endgame"),
    ("The Avengers: The Return of the Avengers");

INSERT INTO
    reviews (movie_id, review)

VALUES
    (1, "Great movie!"),
    (2, "I liked it!"),
    (3, "It was ok."),
    (4, "Great movie!"),
    (5, "I liked it!");

