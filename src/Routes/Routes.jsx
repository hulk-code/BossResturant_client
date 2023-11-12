import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Home/ErrorPage/Error";
import Manu from "../Pages/Manu/Manu/Manu";


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
      ],
    },
  ]);