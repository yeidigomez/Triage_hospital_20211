import "./GuardarPelicula.css"; //importar el css
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Input from "react-bootstrap/input";
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
        <Form.Group className="mb-3" controlId="formGroupNombres">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombres del Paciente"
            name="nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupApellidos ">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellidos del Paciente"
            name="apellidos"
            onChange={handleChange}
            value={formData.apellidos}
          />
        </Form.Group>
        <Row>
          <Form.Group
            as={Col}
            lg="4"
            className="mb-3"
            controlId="formGroupNacimiento"
          >
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="text"
              placeholder="DD/MM/AAAA"
              name="nacimiento"
              onChange={handleChange}
              value={formData.nacimiento}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            sm="12"
            md="6"
            lg="4"
            className="mb-3"
            controlId="formGroupCiudad"
          >
            <Form.Label>Ciudad de Nacimiento</Form.Label>
            <Form.Control
              type="text"
              step=".1"
              placeholder="Ciudad de Nacimiento"
              name="ciudad"
              onChange={handleChange}
              value={formData.ciudad}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-4" controlId="formGroupDocumento">
 
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTipo">
            <Form.Label>Tipo de Documento</Form.Label>
            <Form.Select defaultValue="EPS">
              <option>Cédula de Ciudadania</option>
              <option>Registro Civil</option>
              <option>Tarjeta de Identidad</option>
              <option>Cédula extranjera</option>
              <option>Otro</option>
            </Form.Select>
          </Form.Group> 
 
          <Form.Group as={Col} controlId="formGridCDocumento">
            <Form.Label>Numero de Documento</Form.Label>
            <Form.Control />
          </Form.Group>
 
          <Form.Group as={Col} controlId="formGridEPS">
            <Form.Label>EPS</Form.Label>
            <Form.Select defaultValue="EPS">
            <option>SURA</option>
              <option>Savia Salud</option>
              <option>IPS Universitaria</option>
              <option>Coomeva</option>
              <option>Sanitas</option>
              <option>Nueva EPS</option>
              <option>Otro</option>
            </Form.Select>
          </Form.Group>          
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email Opcional" />
          </Form.Group>
        </Row>
 
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="Direccion de Residencia Opcional" />
        </Form.Group>
 
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="No soy un robot" />
        </Form.Group>
 
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </>
  );
}
 
 
export default GuardarPelicula;
