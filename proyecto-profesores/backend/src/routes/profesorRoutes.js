// backend/src/routes/profesorRoutes.js
const express = require('express');
const profesorController = require('../controllers/profesorController');

const router = express.Router();

router.get('/', profesorController.getProfesores);
router.post('/', profesorController.createProfesor); // Ruta para crear profesor
router.put('/:id', profesorController.updateProfesor); // Ruta para actualizar profesor
router.delete('/:id', profesorController.deleteProfesor); // Ruta para eliminar profesor

module.exports = router;
