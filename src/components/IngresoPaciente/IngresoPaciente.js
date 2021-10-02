import "./IngresoPaciente.css"; //importar el css
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
        <i className="fas fa-user-plus text-black"></i> Registro de Paciente
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupNombres">
          <Form.Label>Nombres</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombres del Paciente"
            name="Nombres"
            onChange={handleChange}
            value={formData.Nombres}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupApellidos ">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellidos del Paciente"
            name="Apellidos"
            onChange={handleChange}
            value={formData.Apellidos}
          />
        </Form.Group>
        
        <Row>
          <Form.Group
            as={Col}
            sm="12"
            md="6"
            lg="4"
            className="mb-3"
            controlId="formGroupNacimiento"
          >
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              type="text"
              placeholder="DD/MM/AAAA"
              name="Fecha"
              onChange={handleChange}
              value={formData.Fecha}
            />
          </Form.Group>
          {/* <div className="d-flex justify-content-xxl-between"> */}
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
              // step=".1"
              placeholder="Ciudad de Nacimiento"
              name="Ciudad"
              onChange={handleChange}
              value={formData.Ciudad}
            />
          </Form.Group>
        </Row>
        {/* </div> */}
        <Form.Group className="mb-5" controlId="formGroupDocumento">
 
        <Row className="mb-3">
          <Form.Group as={Col} 
           sm="12"
           md="6"
           lg="4"
           controlId="formGridTipo">
            
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Control
              type="text"
              // step=".1"
              placeholder="CC, TI, L.E, DNI, CARNET EXT."
              name="TipoDocumento"
              onChange={handleChange}
              value={formData.TipoDocumento}
            />
          </Form.Group>
 
          <Form.Group as={Col} 
           sm="12"
           md="6"
           lg="4"
           controlId="formGridCDocumento">
            <Form.Label>Numero de Documento</Form.Label>
            <Form.Control 
            type="text"
            // step=".1"
            placeholder="Numero de documento"
            name="Documento"
            onChange={handleChange}
            value={formData.Documento}
            />
          </Form.Group>
 
          <Form.Group as={Col} 
          sm="12"
          md="6"
          lg="4"
          controlId="formGridEPS">
            
            <Form.Label>EPS</Form.Label>
            <Form.Control
              type="text"
              // step=".1"
              placeholder="Ingrese EPS"
              name="EPS"
              onChange={handleChange}
              value={formData.EPS}
            />
          </Form.Group>          
        </Row>
        

        <Form.Group className="mb-3" controlId="formGroupEMail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email Opcional"
            name="Email"
            onChange={handleChange}
            value={formData.Email}
          />
        </Form.Group>

 
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="Direccion de Residencia Opcional" />
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
