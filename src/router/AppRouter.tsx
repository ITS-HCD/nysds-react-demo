import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";
import BasicFormPage from "../pages/BasicFormPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "basic-form", element: <BasicFormPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
