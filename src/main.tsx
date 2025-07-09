import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import RootWrapper from "./wrappers/RootWrapper.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import { isProduction } from "./hooks/helper.ts";
import NotFound from "./components/NotFound.tsx";
import ComingSoonPage from "./pages/ComingSoonPage.tsx";
import { Toaster } from 'react-hot-toast';
import BriefPage from "./pages/BriefPage.tsx";

const productionRoutes: RouteObject[] = [
      {
    path: "",
    element: <ComingSoonPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },

  
];

const devRoutes: RouteObject[] = [
  {
    path: "",
    element: <App />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "services",
    element: <ServicesPage />,
  },

  {
    path: "brief",
    element: <BriefPage />,
  },

];

const subroutes = isProduction() ? productionRoutes : devRoutes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
    children: subroutes,
  },

    {
    path: "*",
    element: <NotFound/>
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </StrictMode>
);
