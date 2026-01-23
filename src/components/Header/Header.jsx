import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end>
          VIDEO GAMES
        </NavLink>
        <NavLink to="/contact">
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
