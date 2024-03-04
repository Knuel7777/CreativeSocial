import {} from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <nav
      className="d-flex pt-3 justify-content-between  align-items-center"
      style={{ height: "10%" }}
    >
      <img
        src="data:image/png;base64,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"
        alt="Logo"
      />
      <ul className="d-flex justify-content-between align-items-center ">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
        <li>
          <Link to="/forum">Foro</Link>
        </li>
        <li>
          <Link to="/">Salir</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
