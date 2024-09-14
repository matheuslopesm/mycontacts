/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));

// Caso dê o seguinte erro:
// Error: error:0308010C:digital envelope routines::unsupported

// Execute isso no powershell:
// $env:NODE_OPTIONS = "--openssl-legacy-provider"
