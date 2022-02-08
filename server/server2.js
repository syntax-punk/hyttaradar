/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const db = require('../db.json');

const app = express();
const port = 7676;

app.get('/', (req, res) => {
  res.send('Heisann Verden!');
});

app.get('/users', (req, res) => {
  res.json(db.users);
});

(async () => {
  app.listen(port, () => {
    console.log(`-> listening: ${port}`);
  });
})();
