
const express = require('express');
const PORT = 5000
const app = express();


app.get('/', (req, res) => res.send('<h1> hello amr  <h1>'));

app.listen(PORT, () => console.log('app is on on port : ${PORT}'));
