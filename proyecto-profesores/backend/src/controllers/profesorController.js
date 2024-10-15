// backend/src/controllers/profesorController.js
const ProfesorModel = require('../models/profesorModel');

class ProfesorController {
  async getProfesores(req, res) {
    try {
      const profesores = await ProfesorModel.getProfesores();
      res.json(profesores);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener profesores', error: error.message });
    }
  }

  async createProfesor(req, res) {
    try {
      const { nombre } = req.body;
      const newProfesorId = await ProfesorModel.createProfesor(nombre);
      res.status(201).json({ message: 'Profesor creado', id: newProfesorId });
    } catch (error) {
      res.status(500).json({ message: 'Error al crear profesor', error: error.message });
    }
  }

  async updateProfesor(req, res) {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const updated = await ProfesorModel.updateProfesor(id, nombre);
      if (updated) {
        res.json({ message: 'Profesor actualizado' });
      } else {
        res.status(404).json({ message: 'Profesor no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar profesor', error: error.message });
    }
  }

  async deleteProfesor(req, res) {
    try {
      const { id } = req.params;
      const deleted = await ProfesorModel.deleteProfesor(id);
      if (deleted) {
        res.json({ message: 'Profesor eliminado' });
      } else {
        res.status(404).json({ message: 'Profesor no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar profesor', error: error.message });
    }
  }
}

module.exports = new ProfesorController();
