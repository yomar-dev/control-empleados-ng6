const express = require('express');
const morgan = require('morgan');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));

//Routes

//Star server
app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto: ', app.get('port'));
})
