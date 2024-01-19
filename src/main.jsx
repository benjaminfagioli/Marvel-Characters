import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import routes from '../routes';
import RootLayout from './components/RootLayout/RootLayout';
import  'bootstrap-icons/font/bootstrap-icons.css'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/> }>
      {routes.map((ruta, i)=> {
        let {Path, Element} = ruta
        return(
          <Route path={Path} key={i} Component={Element} />
        )
      })}
      <Route path='*' Component={Error} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
