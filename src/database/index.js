const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'matheus',
  password: 'matheus',
  database: 'mycontacts',
});

client.connect();

// client.query('SELECT * FROM contacts');
