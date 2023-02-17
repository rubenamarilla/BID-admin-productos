import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './views/Main';
import Details from './views/Details';
import ErrorPage from './views/errorPage';
import Update from './views/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: "/:id",
    element: <Details />,
    errorElement: <ErrorPage />
  },
  {
    path: "update/:id",
    element: <Update />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);