const express = require('express');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares

//Routes

//Star server
app.listen(app.get('port'), () => {
    console.log('Escuchando en el puerto: ', app.get('port'));
})
