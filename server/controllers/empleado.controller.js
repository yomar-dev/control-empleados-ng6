const EmpleadoModel = require('../models/empleado.model');

function obtenerEmpleados(req, res){
    EmpleadoModel.find()
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json({ status: 'Error' });
        })
}

function crearEmpleado(req, res){
    const params = req.body;
    EmpleadoModel.create(params, (error, response) => {
        if(error){
            res.send({ status: 'Error' });
        }else{
            res.send({ status: 'Ok', message: 'Registro guardado con éxito', data: response });
        }
    })
}

function obtenerEmpleado(req, res){
    const params = req.params;
    EmpleadoModel.findById(params.id, (error, response) => {
        if(error){
            res.send({ status: 'Error' });
        }else{
            res.send({ status: 'Ok', data: response });
        }
    });
}

function editarEmpleado(req, res){
    const id = req.params.id;
    const data = req.body;
    const empleado = {
        nombre: data.nombre,
        posicion: data.posicion,
        oficina: data.oficina,
        salario: data.salario
    }
    EmpleadoModel.findByIdAndUpdate(id, {$set: empleado}, { new: true }, (error, response) =>{
        if(error){
            res.send({ status: 'Error' })
        }else{
            res.send({ status: 'Ok', message: 'Empleado actualizado.' })
        }
    });
}

function eliminarEmpleado(req, res){
    const id = req.params.id;
    EmpleadoModel.findByIdAndRemove(id, (error, response) => {
        if(error){
            res.send({ status: 'Error' });
        }else{
            res.send({ status: 'Ok', message: 'Empleado eliminado.' });
        }
    })
}

module.exports = {
    obtenerEmpleados,
    crearEmpleado,
    obtenerEmpleado,
    editarEmpleado,
    eliminarEmpleado
}