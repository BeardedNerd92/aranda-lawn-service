import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import { Clients } from "./pages/Clients.jsx";
import { Settings } from "./pages/Settings.jsx";
import { Reports } from "./pages/Reports.jsx";
import CreateInoices from "./pages/CreateInoices.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='create-invoices' element={<CreateInoices />} />
      <Route path='clients' element={<Clients />} />
      <Route path='reports' element={<Reports />} />
      <Route path='settings' element={<Settings />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
