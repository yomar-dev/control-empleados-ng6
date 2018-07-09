const express = require('express');
const router = express.Router();

const EmpleadoController = require('../controllers/empleado.controller');

router.get('/', EmpleadoController.obtenerEmpleados);
router.post('/', EmpleadoController.crearEmpleado);
router.get('/:id', EmpleadoController.obtenerEmpleado);
router.put('/:id', EmpleadoController.editarEmpleado);
router.delete('/:id', EmpleadoController.eliminarEmpleado)

module.exports = router;