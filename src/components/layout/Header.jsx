import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Header.css';
import Logo from './assets/Logo.svg'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
  <header>
    <nav className="container grid navbar">
    <Link className="navbar-logo" to={"/"}>
    <img src={Logo} alt="Little Lemon Logo" />
    </Link>
    <button className="navbar-hamburger" aria-label="menu" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
      {isNavExpanded ? 
      <FontAwesomeIcon icon={faXmark} size="2x" /> :
      <FontAwesomeIcon icon={faBars} size="2x" />
      }
    </button>
    <ul className={isNavExpanded ? 'navbar-links expanded' : 'navbar-links'}
    onClick={() => setIsNavExpanded(!isNavExpanded)}
    >
    <CustomLink to="/">Home</CustomLink>
    <CustomLink to="/about">About</CustomLink>
    <CustomLink to="/menu">Menu</CustomLink>
    <CustomLink to="/reservations">Reservations</CustomLink>
    <CustomLink to="/order-online">Order Online</CustomLink>
    <CustomLink to="/login">Login</CustomLink>
</ul>
    </nav>
  </header>
    )
};

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return (
    <li className={isActive ? "active" : "" }>
      <Link to={to} aria-label={children} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Header;
