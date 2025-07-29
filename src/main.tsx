import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  NysSkipnavComponent,
  NysGlobalHeaderComponent,
  NysGlobalFooterComponent,
  NysUnavFooterComponent,
  NysUnavHeaderComponent,
  NysBacktotopComponent,
} from "./utils/nysds-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NysSkipnavComponent />
    <NysUnavHeaderComponent />
    <NysGlobalHeaderComponent
      appName="React Demo Form"
      agencyName="Office of Information Technology Services"
    >
      <ul>
        <li>
          <a href="https://its.ny.gov/services">Services</a>
        </li>
        <li>
          <a href="https://its.ny.gov/get-help">Help Center</a>
        </li>
        <li>
          <a href="https://its.ny.gov/cybersecurity">Cybersecurity</a>
        </li>
        <li>
          <a href="https://its.ny.gov/policies">Policies and Laws</a>
        </li>
        <li>
          <a href="https://its.ny.gov/procurement">Procurement</a>
        </li>
        <li>
          <a href="https://its.ny.gov/about-us">About Us</a>
        </li>
      </ul>
    </NysGlobalHeaderComponent>
    <App />
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
  </StrictMode>
);
