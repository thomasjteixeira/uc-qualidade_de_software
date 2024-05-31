const express = require('express');
const contaRoutes = require('./routes/ContaRoutes');
const boletoRoutes = require('./routes/BoletoRoutes');

const app = express();

app.use(express.json());
app.use('/', contaRoutes);
app.use('/', boletoRoutes);

module.exports = app;
