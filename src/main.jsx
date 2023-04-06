import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './Components/Order/Order';
import Home from './Components/Home/Home';
import Card from './Components/Card/Card';
import OrderReview from './Components/OrderReview/OrderReview';

import Shop from './Components/Shop/Shop';
import productLoader from './Components/DataLoad/DataLoad';
import CheakOut from './Components/CheakOut/CheakOut';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>,
    
      },
    
      {
        path: "/review",
       element:<OrderReview></OrderReview>,
       loader: productLoader
      },
      {
        path: "/cheek-out",
       element:<CheakOut></CheakOut>,
       loader: productLoader
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
