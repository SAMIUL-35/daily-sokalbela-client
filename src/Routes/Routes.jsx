import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Addarticle from "../Pages/AddArticle/Addarticle";
import Allarticle from "../Pages/AllArticle/Allarticle";
import Subcription from './../Pages/Subcription/Subcription';
import Myarticle from './../Pages/Myarticle/Myarticle';
import Login from './../Pages/Login/Login';
import Signup from './../Pages/Signup/Signup';
import Dashboard from "../Layout/Dashboard/Dashboard";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/addar',
          element: <Addarticle></Addarticle>,
        },
        {
          path: '/subcrip',
          element: <Subcription></Subcription>,
        },
        {
          path: '/myarticle',
          element: <Myarticle></Myarticle>,
        },
        {
          path: '/all',
          element: <Allarticle></Allarticle>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signup',
          element: <Signup></Signup>,
        },
       
      ],
      
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children :[
       
      ]
      
       
       
     
      
    },
    
  ])