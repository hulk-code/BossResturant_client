import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Home/ErrorPage/Error";
import Manu from "../Pages/Manu/Manu/Manu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secrat from "../Pages/Secret/Secrat";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import DashBoard from "../Layout/DashBoard/DashBoard";
import Cart from "../Pages/UserDashBoard/Cart/Cart";




 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element:<Home></Home>,
        },
        {
          path: '/manu',
          element:<Manu></Manu>,
        },
        {
          path: '/orders/:category',
          element:<Order></Order>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/secrat',
          element:<PrivateRoute><Secrat></Secrat></PrivateRoute>
        },
      ],
    },
    {
      path:'/dashboard',
      element:<DashBoard></DashBoard>,
      children:[
       {
        path:'cart',
        element:<Cart></Cart>
       }
      ]
    }

  ]);