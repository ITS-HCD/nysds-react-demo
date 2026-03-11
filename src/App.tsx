import { Outlet } from "react-router-dom";
import {
  NysSkipnav,
  NysGlobalHeader,
  NysGlobalFooter,
  NysUnavFooter,
  NysUnavHeader,
  NysBacktotop,
} from "@nysds/components/react";
import "./styles/App.scss";

function App() {
  return (
    <>
      <NysSkipnav />
      <NysUnavHeader />

      <NysGlobalHeader
        appName="React Demo Form"
        agencyName="Office of Information Technology Services"
        homepageLink="/"
      >
        <ul>
          <li>
            <a href="/nysds-react-demo/">Home</a>
          </li>
          <li>
            <a href="/nysds-react-demo/#/basic-form">Basic Form</a>
          </li>
          <li>
            <a href="/nysds-react-demo/#/stepper">Stepper</a>
          </li>
          <li>
            <a href="/nysds-react-demo/#/showcase">Dev Playground</a>
          </li>
        </ul>
      </NysGlobalHeader>
      <main className="nys-flex-1 nys-display-flex nys-flex-column">
        <Outlet />
      </main>
      <NysGlobalFooter agencyName="Office of Information Technology Services">
        <ul>
          <li>
            <a href="https://its.ny.gov">ITS Home</a>
          </li>
          <li>
            <a href="https://its.ny.gov/about">About ITS</a>
          </li>
        </ul>
      </NysGlobalFooter>

      <NysUnavFooter />
      <NysBacktotop />
    </>
  );
}

export default App;
