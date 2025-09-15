import { Outlet } from "react-router-dom";
import {
  NysSkipnavComponent,
  NysGlobalHeaderComponent,
  NysGlobalFooterComponent,
  NysUnavFooterComponent,
  NysUnavHeaderComponent,
  NysBacktotopComponent,
} from "./utils/nysds-components";
import "./styles/App.css";

function App() {
  return (
    <>
      <NysSkipnavComponent />
      <NysUnavHeaderComponent />
      <NysGlobalHeaderComponent
        appName="React Demo Form"
        agencyName="Office of Information Technology Services"
        homepageLink="/nysds-react-demo"
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
      <main className="nys-flex-1 nys-display-flex nys-flex-column">
        <Outlet />
      </main>
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
}

export default App;
