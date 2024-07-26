
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import ContexApi from './Provider/ContextApi.jsx/ContexApi';
import React from 'react';



ReactDOM.createRoot(document.getElementById("root")).render(
  <ContexApi>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ContexApi>);
