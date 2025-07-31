import { Link } from "react-router-dom";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div className="main-content nys-display-flex nys-flex-column nys-flex-align-center">
      <h1>Welcome to the React Demo</h1>
      <img src="homepage-grid.svg" alt="" role="presentation" />
      <Link
        to="https://github.com/ITS-HCD/nysds-react-demo"
        className="--nys-font-size-5xl centered-link"
      >
        Please read the README found on the main repo about the usage of this
        demo
      </Link>
    </div>
  );
};

export default HomePage;
