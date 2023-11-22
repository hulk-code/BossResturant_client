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
import AllUser from "../Layout/DashBoard/AllUsers/AllUser";
import AddItems from "../Layout/DashBoard/AddItems/AddItems";
import AdminRoute from "./Adminroute/AdminRoute";
import ManageItems from "../Layout/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Layout/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Layout/DashBoard/Payment/Payment";
import PaymentHistory from "../Layout/DashBoard/PaymentHistory/PaymentHistory";




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
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      //  element:<DashBoard></DashBoard>,
      children:[
       {
        path:'cart',
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
       },
       {
        path:'payment',
        element:<PrivateRoute><Payment></Payment></PrivateRoute>
       },
       {
        path:'paymenthistory',
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
       },

       //admin route
       {
        path:'alluser',
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
       },
       {
        path:'additems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
       },
       {
        path:'manageitems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
       },
       {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/menu/${params.id}`)
       },
      ]
    }

  ]);