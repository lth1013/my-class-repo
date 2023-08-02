DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE instructors (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE courses (
  id INT NOT NULL AUTO_INCREMENT,
  course_title VARCHAR(30) NOT NULL,
  instructor_id INT,
  order_details TEXT,
  FOREIGN KEY (instructor_id)
  REFERENCES instructors(id)
  ON DELETE SET NULL,
  PRIMARY KEY (id)
);


INSERT INTO instructors (first_name, last_name)
VALUES ("Farley", "Wittles"),
       ("Asher", "Filth Lord"),
       ("Sage", "Filth Lord");

INSERT INTO courses (course_title, instructor_id, order_details)
VALUES ("Full Stack", 1, "All things web dev"),
       ("Data", 2, "All things Data"),
       ("Cooking", 3, "All things Yummy");

-- DELETE FROM instructors 
-- WHERE id = 1;

-- UPDATE courses
-- SET instructor_id = null
-- WHERE instructor_id = 1;

