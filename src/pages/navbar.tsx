import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import './styles/main.css';

type NavBarProps = {
  SearchBar?: ReactNode;
};

export default function NavBar({ SearchBar }: NavBarProps) {
  return (
    <nav className="nav-bar">
      <ul className="links">
        <li className="link">
          <Link to="/">
          <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className="link">
          <Link to="/favorite-repos">
            <FontAwesomeIcon icon={faHeart} />
            Repository
          </Link>
        </li>
        <li className="link">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
            Profile
          </Link>
        </li>
      </ul>
      {SearchBar}
    </nav>
  );
}
