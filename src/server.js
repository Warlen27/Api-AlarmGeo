const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

require('./database');

const app = express();

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(express.json());
app.use(routes);

app.listen(3333)