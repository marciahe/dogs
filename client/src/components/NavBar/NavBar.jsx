import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <h2 className={style.logo}>Doggies</h2>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/create">Form</Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
