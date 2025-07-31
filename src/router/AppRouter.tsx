import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";
import BasicFormPage from "../pages/BasicFormPage.tsx";
import StepperPage from "../pages/stepper/StepperPage.tsx";
import SamplePage1 from "../pages/stepper/SamplePage1.tsx";
import SamplePage2 from "../pages/stepper/SamplePage2.tsx";
import SamplePage3 from "../pages/stepper/SamplePage3.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "basic-form", element: <BasicFormPage /> },
      { path: "stepper", element: <StepperPage />,
        children: [
          { index: true, element: <SamplePage1 /> }, // default step
          { path: "sample1", element: <SamplePage1 /> },
          { path: "sample2", element: <SamplePage2 /> },
          { path: "sample3", element: <SamplePage3 /> },
        ]
       },
    ],
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
