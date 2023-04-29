import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/create">Form</Link>
    </nav>
  );
};

export default NavBar;
