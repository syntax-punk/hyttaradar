/* eslint-disable @typescript-eslint/no-var-requires */
const { Client } = require('pg');
const express = require('express');

const app = express();
const port = 7676;

const client = new Client({
  user: 'voogie',
  password: 'Kd096229',
  host: 'postgres',
  database: 'calendar'
});

app.get('/', (req, res) => {
  res.send('Heisann Verden!');
});

app.get('/users', async (req, res) => {
  const result = await client
    .query('select * from calendarusers')
    .then((payload) => payload.rows)
    .catch((err) => {
      throw new Error('-> Query failed: ', err);
    });

  res.json(result);
});

(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`-> listening: ${port}`);
  });
})();
