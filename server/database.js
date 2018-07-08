const mongoose = require('mongoose');


mongoose.connect(URI)
    .then(db => console.log("Conexión exitosa!!"))
    .catch(erro => console.log("Problemas con la conexión."))

module.exports = mongoose;