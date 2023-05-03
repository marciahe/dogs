import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section>
      <h1>Doggies</h1>
      <h2>Looking for a best friend? Find it here:</h2>
      <SearchBar></SearchBar>
      <Link to="home">Take a look at all the Doggies</Link>
    </section>
  );
};

export default Landing;
