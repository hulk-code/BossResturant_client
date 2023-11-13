import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Home/ErrorPage/Error";
import Manu from "../Pages/Manu/Manu/Manu";
import Order from "../Pages/Order/Order";


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
          path: '/order',
          element:<Order></Order>,
        },
      ],
    },
  ]);