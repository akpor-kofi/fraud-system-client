import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {routes} from "./routes";
import './index.css'
// import {Outlet,
//     Link,
//     Router,
//     Route,
//     RootRoute} from "@tanstack/router"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import {Payment} from "./paymentPage/Payment";
const router = createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
