import {
  NavLink
} from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="myheader">
        <li>
          <NavLink to="/home" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="selected">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

