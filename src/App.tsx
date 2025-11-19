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
      {/* <NysGlobalHeaderComponent
        appName="React Demo Form"
        agencyName="Office of Information Technology Services"
        homepageLink="/nysds-react-demo"
      >
        <ul>
          <li>
            <a href="/nysds-react-demo">Home</a>
          </li>
          <li>
            <button type="button">Form Examples</button>
            <ul>
              <li><a href="/nysds-react-demo/#/basic-form">Basic Form</a></li>
              <li><a href="/nysds-react-demo/#/stepper">Stepper</a></li>
            </ul>
          </li>
          <li>
            <a href="/nysds-react-demo/#/about">About</a>
          </li>
        </ul>
      </NysGlobalHeaderComponent> */}
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
      {/* <NysGlobalFooterComponent agencyName="Office of General Services">
        <ul>
          <li>
            <span>About</span>
            <ul>
              <li><a href="#">Agency Overview</a></li>
              <li><a href="#">Commissioner Jeanette M. Moy</a></li>
              <li><a href="#">Strategic Plan</a></li>
              <li><a href="#">Employment</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Buy Flags</a></li>
              <li><a href="#">Permits to Assemble</a></li>
            </ul>
          </li>

          <li>
              <span>Public Information</span>
              <ul>
                <li><a href="#">Press</a></li>
                <li><a href="#">Freedom of Information Law (FOIL)</a></li>
                <li><a href="#">Open Meetings</a></li>
                <li><a href="#">Executive Law § 203-b List of State Boards</a></li>
                <li><a href="#">Homeowner Warning Notice under Real Property Tax Law § 1144</a></li>
                <li><a href="#">OGS and Open Data</a></li>
                <li><a href="#">Design-Build Report</a></li>
                <li><a href="#">Site Map</a></li>
              </ul>
          </li>

          <li>
            <span>Legal</span>
            <ul>
              <li><a href="#">Rules and Regulations</a></li>
              <li><a href="#">Service of Process</a></li>
              <li><a href="#">Debarred and Non-Responsible Entities</a></li>
              <li><a href="#">Executive Order 157</a></li>
              <li><a href="#">Executive Order 16</a></li>
              <li><a href="#">Iran Divestment Act</a></li>
              <li><a href="#">Advisory Council on Procurement Lobbying</a></li>
              <li><a href="#">Photo ID Requirements in OGS Buildings</a></li>
            </ul>
          </li>

          <li>
            <span>Policies</span>
            <ul>
              <li><a href="#">Reasonable Accommodation</a></li>
              <li><a href="#">Federal Civil Rights Nondiscrimination Public Notice</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Use of Unmanned Aircraft Systems</a></li>
              <li><a href="#">OGS Translated Forms and Documents</a></li>
            </ul>
          </li>

          <li>
            <span>Additional Websites</span>
            <ul>
              <li><a href="#">Business Services Center</a></li>
              <li><a href="#">Empire State Plaza</a></li>
              <li><a href="#">Project Sunlight</a></li>
              <li><a href="#">Downtown Albany Employee Parking</a></li>
              <li><a href="#">NYSStore</a></li>
              <li><a href="#">Register to Vote</a></li>
            </ul>
          </li>
        </ul>
      </NysGlobalFooterComponent> */}

      <NysUnavFooterComponent />
      <NysBacktotopComponent />
    </>
  );
}

export default App;
