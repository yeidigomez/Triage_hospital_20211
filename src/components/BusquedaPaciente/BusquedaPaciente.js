import "./BusquedaPaciente.css"; //importar el css
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";


  

function BusquedaPaciente() {

   
 
   
  
    return (
        <>
        <h1 className="titulo">
          <i className="fas fa-search text-black"></i> Búsqueda de Pacientes
        </h1>
        <br>

        </br>
        {/* <a href="/" className="logo">
          Busqueda de Pacientes
        </a> */}

        <InputGroup className="mb-3">
            <Form.Label className="mt-2">Búsqueda de Paciente por Documento:</Form.Label>
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
            <Form.Label>
              Búsqueda de Paciente por Nombre/Apellido:
            </Form.Label>
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