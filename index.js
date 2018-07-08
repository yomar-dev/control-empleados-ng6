const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./server/database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Router

//Start server
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo el puerto: ', app.get('port'));
})