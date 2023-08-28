import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Header.css';
import Logo from '../../assets/Logo.svg'

const Header = () => {
  return (
  <header>
    <nav className="container grid navbar">
    <img src={Logo} className="navbar-logo"></img>
    <ul className="navbar-links">
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
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Header;
