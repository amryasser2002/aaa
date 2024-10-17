
const express = require('express');
const mongoose = require('mongoose');
//init app
const PORT = 5000
const app = express();

//connect db
const DB_user='root';password
const DB_password='example';
const DB_port= 27017;
const DB_ipaddress= 'mongo';
const URI=`mongodb://${DB_user}:${DB_password}@${DB_ipaddress}:${DB_port}`;
mongoose
.connect(URI)
.then(() => console.log('connect to db...'))
.catch((err) => console.log('failed : ' ,err));

app.get('/', (req, res) => res.send('<h1> hello amr <h1>'));

app.listen(PORT, () => console.log('app is on on port : ${PORT}'));
