const express = require('express');
const app = express();

let sellers = [];
app.get('/', (req, res) => {
  const seller = sellers.find((seller) => seller.id === req.query.id);
});

app.post('/signup', (req, res) => {});

app.post('/login', (req, res) => {});

app.post('/products', (req, res) => {});
app.put('/products/:id', (req, res) => {});

app.get('/products', (req, res) => {});

app.get('/products/:id', (req, res) => {});
