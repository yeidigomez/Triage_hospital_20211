import "./Peliculas.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/json/peliculas.json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  }, []);

  return (
    // PELICULAS
    <section id="peliculas">
      <h1 className="mb-3">
        <i className="fas fa-film"></i> Peliculas
      </h1>
      <div className="grid">
        {peliculas.map((pelicula) => {
          return (
            <div className="pelicula" key={pelicula.id}>
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
