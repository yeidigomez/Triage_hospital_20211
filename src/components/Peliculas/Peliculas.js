import "./Peliculas.css";
import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

async function eliminarPelicula(id) {
  return fetch(`http://localhost:8080/eliminar-pelicula/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(() => {
      // la pelicula se eliminó exitosamente
      // refrescar el componente de peliculas
      // de lista de pelidulas eliminar el elemento
      // volver a consumir el servicio de consulta de peliculas
    });
}

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/json/peliculas.json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  }, []);

  return (
    // PELICULAS
    <section id="peliculas">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="m-0">
          <i className="fas fa-film"></i> Peliculas
        </h1>
        {user.isLoggedIn ? (
          <button
            id="boton-crear-pelicula"
            className="boton-icono"
            title="Crear pelicula"
            // onClick={() => history.push("/guardar-pelicula")}
            onClick={() => history.push("/Buscar-Paciente")}
          >
            <i class="fas fa-plus-circle"></i>
          </button>
        ) : null}
      </div>
      <div className="grid">
        {peliculas.map((pelicula) => {
          return (
            <div className="pelicula" key={pelicula.id}>
              {user.isLoggedIn ? (
                <ul className="acciones">
                  <li>
                    <button
                      className="boton-icono editar"
                      title="Editar pelicula"
                      onClick={() =>
                        history.push(`/guardar-pelicula/${pelicula.id}`)
                      }
                    >
                      <i class="fas fa-pen-square"></i>
                    </button>
                  </li>
                  <li>
                    <button
                      className="boton-icono eliminar"
                      title="Eliminar pelicula"
                      onClick={() => eliminarPelicula(pelicula.id)}
                    >
                      <i class="fas fa-minus-circle"></i>
                    </button>
                  </li>
                </ul>
              ) : null}
              <img
                className="poster"
                src={pelicula.imagen}
                alt={pelicula.titulo}
              />
              <div className="info">
                <p className="calificacion">
                  <i className="fas fa-star"></i> {pelicula.calificacion}
                </p>
                <p className="titulo">{pelicula.titulo}</p>
                <Link to={`/pelicula/${pelicula.id}`} className="boton-link">
                  Ver más
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Peliculas;
