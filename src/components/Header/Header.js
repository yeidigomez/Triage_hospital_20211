import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Header({ menuClickedFunction }) {
  const { user, setUser } = useContext(UserContext);

  const cerrarSesion = () => {
    setUser({ isLoggedIn: false });
    localStorage.removeItem("user");
  };

  return (
    /* CABECERA */
    <header id="cabecera">
      <div className="contenedor">
        <a href="/" className="logo">
          Hospital Divino niño
        </a>
        <ul id="botones-cabecera">
          <li>
            {!user.isLoggedIn ? (
              <Link to="/" className="boton-login">
                <i className="fas fa-user"></i>
              </Link>
            ) : (
              <button className="boton-logout" onClick={() => cerrarSesion()}>
                <i className="fas fa-sign-out-alt"></i>
              </button>
            )}
            <li>
            {user.isLoggedIn ? (
                <ul className="acciones">
              <button
                  id="boton-menu-principal"
                  className="boton-icono"
                  onClick={() => menuClickedFunction()}
                >
                  <i className="fas fa-bars"></i>
              </button>
                </ul>
              ) : null}
              </li>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
