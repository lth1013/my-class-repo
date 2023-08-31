# AJAX Books

In this activity we will add functionality to a full stack React application for retrieving books from a database.

## Instructions

* Open the [Unsolved](Unsolved) folder in your editor and run `npm install` at the project's root.

* In order to initially populate the database, run the following command at the project root: `npm run seed`.

* This should insert a few records into the MongoDB.

* Run `npm run dev` at the project root to start the application.

* Open your browser to [localhost:3000](http://localhost:3000) and take a moment to study the rendered application.

* Open up `client/src/pages/Books.js` and add code so that when the component mounts, it performs an Axios request to retrieve all of the books in the database. Once the Axios request is complete, it should set `books` equal to the array of books.

* If successful, a list of books should be rendered on the right side of the page.

  * We'll work on making the form functional in the next activity.

## Hints

* Use the API helper module (`client/src/utils/API.js`) to perform an AJAX request which should return _all_ of the books in the database.

* The only file you will need to modify is `client/src/pages/Books.js`.
