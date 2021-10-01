import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

import GuardarPelicula from "./components/GuardarPelicula/GuardarPelicula";
import BusquedaPaciente from "./components/BusquedaPaciente/BusquedaPaciente";

import Layout from "./Layout";
import Pacientes from "./components/Pacientes/Pacientes";
import Paciente from "./components/Paciente/Paciente";
import IngresoPaciente from "./components/IngresoPaciente/IngresoPaciente";

import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(
    userStorage ? userStorage : { isLoggedIn: false }
  );

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Layout path="/pacientes">
            <Pacientes />
          </Layout>
          <Layout path="/paciente/:id">
            <Paciente />
          </Layout>
          <Layout path="/login">
            <Login />
          </Layout>
          <Layout path="/ingreso-paciente/:id?">
            <IngresoPaciente />
          </Layout>
          <Layout path="/Buscar-Paciente/:id?">
            <BusquedaPaciente />
          </Layout>
          <Layout exact path="/">
            <Paciente />
          </Layout>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
