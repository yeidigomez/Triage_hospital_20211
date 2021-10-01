import "./BusquedaPaciente.css"; //importar el css
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  

function BusquedaPaciente() {
    const { id } = useParams();
    const [formData, setFormData] = useReducer(formReducer, {});
   
    useEffect(() => {
      if (id) {
        fetch(`http://localhost:3000/json/${id}.json`)
          .then((response) => response.json())
          .then((data) => setFormData(data));
      }
    }, [id]);
   
  
    return (
        <>
        <h1 className="titulo">
          <i className=""></i> Busqueda de Pacientes
        </h1>
        <br>

        </br>
        {/* <a href="/" className="logo">
          Busqueda de Pacientes
        </a> */}

        <InputGroup className="mb-3">
            <Form.Label className="mt-2">Busqueda de Paciente por Documento:</Form.Label>
            <FormControl
            id= "formulario1"
            placeholder="Numero de Documento"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            Buscar
            </Button>
        </InputGroup>

        <InputGroup>
            <Form.Label>Busqueda de Paciente por Nombre/Apellido   :</Form.Label>
            <FormControl
            id= "formulario2"
            placeholder="Nombres y/o Apellidos"
            aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-secondary">Buscar</Button>
        </InputGroup>
        </>

    );


}

export default BusquedaPaciente;