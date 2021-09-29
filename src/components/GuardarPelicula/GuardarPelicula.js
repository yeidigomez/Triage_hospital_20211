import "./GuardarPelicula.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";

// async function guardarPelicula(pelicula, id) {
//   let url = 'http://localhost:8080/guardar-pelicula';
//   if (id) {
//     url = url + '/' + id;
//   }
//   return fetch(url, {
//     method: id? 'PUT' : 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(pelicula)
//   }).then(response => response.json())
// }

const formReducer = (state, data) => {
  if (data.isEvent) {
    return {
      ...state,
      [data.name]: data.value,
    };
  }
  return {
    ...data,
  };
};

function GuardarPelicula() {
  const { id } = useParams();
  const [formData, setFormData] = useReducer(formReducer, {});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/json/${id}.json`)
        .then((response) => response.json())
        .then((data) => setFormData(data));
    }
  }, [id]);

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
      isEvent: true,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // guardarPelicula(formData, id).then(() => {
    //   // la pelicula se guardó exitosamente
    // });
  };

  return (
    <>
      <h1 className="mb-5">
        <i className="fas fa-film"></i> Registro de Paciente
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupTitulo">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre del Paciente"
            name="nombre"
            onChange={handleChange}
            value={formData.titulo}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSinopsis">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Apellidos del Paciente"
            name="apellidos"
            onChange={handleChange}
            value={formData.sinopsis}
          />
        </Form.Group>
        <Row>
          <Form.Group
            as={Col}
            lg="4"
            className="mb-3"
            controlId="formGroupDirector"
          >
            <Form.Label>EPS</Form.Label>
            <Form.Control
              type="text"
              placeholder="EPS del Paciente"
              name="eps"
              onChange={handleChange}
              value={formData.director}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            sm="12"
            md="6"
            lg="4"
            className="mb-3"
            controlId="formGroupCalificacion"
          >
            <Form.Label>Calificación</Form.Label>
            <Form.Control
              type="number"
              step=".1"
              placeholder="Calificación de la pelicula"
              name="calificacion"
              onChange={handleChange}
              value={formData.calificacion}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGroupImagen">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Poster de la pelicula"
              name="imagen"
              onChange={handleChange}
              value={formData.imagen}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-4" controlId="formGroupActores">
          <Form.Label>Actores</Form.Label>
          <Form.Control
            type="text"
            placeholder="Actores de la pelicula separados por coma"
            name="actores"
            onChange={handleChange}
            value={formData.actores}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  );
}

export default GuardarPelicula;
