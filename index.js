// Vecchia maniera 
// const express = require('express');
import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';


const app = express();

//Conect db

db.authenticate()
    .then( () => console.log('DB Connect'))
    .catch(error => console.log(error))

// Definire Porto
const port = process.env.PORT || 4000;

//Abilitare pug

app.set('view engine', 'pug');

//Get Year
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nomeSito = "Agenzia di Viaggi";
    return next();
})

//Cartella publica 
app.use(express.static('public'));

//Aggiungere route
app.use('/', router);

app.listen(port, () => {
    console.log("Server nel porto ${port}");
});


