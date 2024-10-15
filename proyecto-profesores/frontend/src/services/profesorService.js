// frontend/src/services/profesorService.js
const API_URL = 'http://localhost:3001/api';

export async function getProfesores() {
  const response = await fetch(`${API_URL}/profesores`);
  if (!response.ok) {
    throw new Error('Error al obtener los profesores');
  }
  return response.json();
}

export async function createProfesor(nombre) {
  const response = await fetch(`${API_URL}/profesores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre }),
  });
  if (!response.ok) {
    throw new Error('Error al crear profesor');
  }
  return response.json();
}

export async function updateProfesor(id, nombre) {
  const response = await fetch(`${API_URL}/profesores/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre }),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar profesor');
  }
  return response.json();
}

export async function deleteProfesor(id) {
  const response = await fetch(`${API_URL}/profesores/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar profesor');
  }
  return response.json();
}
