const express = require('express');
const { json } = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://localhost/joola';
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log('connected!!!');
})
app.use(express.json());
const appUserRouter = require('./routes/appUserRoute');
app.use("/appusers", appUserRouter);
app.listen(9000, () => {
    console.log('Server started in port 9000!!!')
})