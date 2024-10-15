import React, { useState, useEffect } from 'react';
import { Button, Table, Form, Modal, Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';
import { getProfesores, createProfesor, updateProfesor, deleteProfesor } from '../services/profesorService';
import './ProfesorCrud.css';

function ProfesorCrud() {
  const [profesores, setProfesores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchProfesores();
  }, []);

  const fetchProfesores = async () => {
    try {
      const data = await getProfesores();
      setProfesores(data);
    } catch (err) {
      setError('Error al cargar los profesores');
    }
  };

  const handleCreateOrUpdate = async () => {
    try {
      if (editId) {
        await updateProfesor(editId, nombre);
      } else {
        await createProfesor(nombre);
      }
      setNombre('');
      setEditId(null);
      await fetchProfesores();
    } catch (err) {
      setError('Error al guardar el profesor');
    }
  };

  const handleEdit = (profesor) => {
    setNombre(profesor.nombre);
    setEditId(profesor.id);
  };

  const handleDelete = async () => {
    try {
      await deleteProfesor(deleteId);
      await fetchProfesores();
      setShowModal(false);
    } catch (err) {
      setError('Error al eliminar el profesor');
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-primary">Gestión de Profesores</h2>
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group className="d-flex">
            <Form.Control
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre del profesor"
              className="me-2"
            />
            <Button variant="primary" onClick={handleCreateOrUpdate}>
              {editId ? <><FaSave className="me-1" /> Actualizar</> : <><FaPlus className="me-1" /> Crear</>}
            </Button>
          </Form.Group>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre del Profesor</th>
            <th className="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {profesores.map((profesor) => (
            <tr key={profesor.id}>
              <td>{profesor.nombre}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(profesor)}>
                    <FaEdit /> Editar
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => confirmDelete(profesor.id)}>
                    <FaTrash /> Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas eliminar este profesor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProfesorCrud;