const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist/index.html')));

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
