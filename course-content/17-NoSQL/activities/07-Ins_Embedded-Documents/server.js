const express = require('express');
const { MongoClient } = require('mongodb');
const data = require('./models/data');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = 'groceryListDB';

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    // Drops any documents, if they exist
    await db.collection('groceryList').deleteMany({});
    // Adds data to database
    const res = await db.collection('groceryList').insertMany(data);
    console.log(res);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Mongo connection error: ', err.message);
  }
}

seedDBAndStartServer();

app.use(express.json());

// http://localhost:3001/sale-over-30
// This will return any documents with embedded documents that match
app.get('/sale-over-30', (req, res) => {
  db.collection('groceryList')
    // Use dot notation for embedded document
    // $gte specifies we want percentage discounts greater than 30
    // returns back all documents that have embedded documents that have percentage discounts greater than 30
    // https://www.mongodb.com/docs/v5.0/reference/operator/aggregation/#comparison-expression-operators  
    .find({ 'promotion.percentage_discount': { $gte: 30 } })
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/sale-tuesday', (req, res) => {
  db.collection('groceryList')
    // Use dot notation for embedded document
    // $eq specifies we want value equal to 'Tuesday'
    // https://www.mongodb.com/docs/v5.0/reference/operator/aggregation/#comparison-expression-operators
    .find({ 'promotion.promotion_id': { $eq: 'Tuesday' } })
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});