import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter";
// Instead of putting the import below here, go to the root index.html and put the styles imports there
// import "@nysds/styles/full";
// import "@nysds/styles/themes/admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
