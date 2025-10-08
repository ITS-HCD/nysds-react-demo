import { Link } from "react-router-dom";
import {
  NysSkipnavComponent,
  NysGlobalHeaderComponent,
  NysGlobalFooterComponent,
  NysUnavFooterComponent,
  NysUnavHeaderComponent,
  NysBacktotopComponent,
} from "../utils/nysds-components";

const ErrorPage = () => {
  return (
    <>
      <NysSkipnavComponent />
      <NysUnavHeaderComponent />
      <NysGlobalHeaderComponent
        appName="React Demo Form"
        agencyName="Office of Information Technology Services"
        homepageLink="/"
      >
        <ul>
          <li>
            <a href="/nysds-react-demo">Home</a>
          </li>
          <li>
            <a href="/nysds-react-demo/#/basic-form">Basic Form</a>
          </li>
          <li>
            <a href="/nysds-react-demo/#/stepper">Stepper</a>
          </li>
          <li>
            <a href="/nysds-react-demo/#/about">About</a>
          </li>
        </ul>
      </NysGlobalHeaderComponent>
      <div className="main-content nys-flex-1 nys-display-flex nys-flex-column nys-flex-align-center">
        <h1>Oh no, this route doesn't exist!</h1>
        <img src="error-image.png" alt="" role="presentation" />
        <Link to="/" className="centered-link">
          You can go back to the home page by clicking here, though!
        </Link>
      </div>
      <NysGlobalFooterComponent agencyName="Office of Information Technology Services">
        <ul>
          <li>
            <a href="https://its.ny.gov">ITS Home</a>
          </li>
          <li>
            <a href="https://its.ny.gov/about">About ITS</a>
          </li>
        </ul>
      </NysGlobalFooterComponent>
      <NysUnavFooterComponent />
      <NysBacktotopComponent />
    </>
  );
};

export default ErrorPage;
