const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
// 🔑 To integrate MongoDB into an existing Express server, 
// we must install the mongodb package using the command npm install mongodb, 
// and require mongodb and the MongoClient class in the server.js file.
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
// 🔑 We connect to a local instance of MongoDB, including the database name, 
// using mongodb://localhost:27017/ and appending the database name.
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = 'shelterDB';

// Use connect method to connect to the mongo server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    // Use client.db() constructor to add new db instance
    // 🔑 We then use the db variable to create a connection to a MongoDB instance 
    // and return the reference to the database.
    db = client.db(dbName);

    // start up express server
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// Built in Express function that parses incoming requests to JSON
app.use(express.json());


// http://localhost:3001/create
// {
//     "name": "Farley",
//     "breed": "Tabby"
// }
app.post('/create', (req, res) => {
  // Use db connection to add a document
  db.collection('petCollection').insertOne(
    { name: req.body.name, breed: req.body.breed }
  )
    .then(results => res.json(results))
    // {
    //   "acknowledged": true,
    //   "insertedId": "64e4410a6404bd7e377310d5"
    // }
    .catch(err => {
      if (err) throw err;
    });
});


// http://localhost:3001/read
// Get Back:
// [
//   {
//     "_id": "6376fb52614ce525f9fda14d",
//     "name": "Farley",
//     "breed": "Tabby"
//   }
// ]
app.get('/read', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('petCollection')
    .find()
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
