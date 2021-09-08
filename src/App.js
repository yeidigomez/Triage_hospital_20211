import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./Layout";
import Peliculas from "./components/Peliculas/Peliculas";
import Pelicula from "./components/Pelicula/Pelicula";
import Login from "./components/Login/Login";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ isLoggedIn: false });

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Layout path="/peliculas">
            <Peliculas />
          </Layout>
          <Layout path="/pelicula/:id">
            <Pelicula />
          </Layout>
          <Layout path="/login">
            <Login />
          </Layout>
          <Layout exact path="/">
            <Peliculas />
          </Layout>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
