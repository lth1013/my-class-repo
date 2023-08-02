-- USE registrar_db;

INSERT INTO instructors (first_name, last_name)
VALUES ("Farley", "Wittles"),
       ("Asher", "Filth Lord"),
       ("Sage", "Filth Lord");

INSERT INTO courses (course_title, instructor_id, order_details)
VALUES ("Full Stack", 1, "All things web dev"),
       ("Data", 2, "All things Data"),
       ("Cooking", 3, "All things Yummy");
