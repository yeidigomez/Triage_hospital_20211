import "./Sidenav.css";
import { Link } from "react-router-dom";

function Sidenav({ open, menuClickedFunction }) {
  return (
    /* Side menu */
    <nav id="menu-principal-sidenav" className={open ? "open" : ""}>
      <button
        id="boton-cerrar-menu"
        className="boton-icono"
        onClick={() => menuClickedFunction()}
      >
        <i className="fas fa-times"></i>
      </button>
      <ul>
        <li>
          <Link to="/peliculas">
            <i className="fas fa-user-plus"></i> Ingresar paciente 
          </Link>
        </li>
        <li>
          <Link to="/series">
            <i className="fas fa-user-edit"></i> Modificar paciente
          </Link>
        </li>
        <li>
          <Link to="/actores">
            <i className="fas fa-search"></i> Buscar paciente
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
