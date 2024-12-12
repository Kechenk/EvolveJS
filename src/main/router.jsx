import { createBrowserRouter } from "react-router-dom";
import Register from "../page/Register";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "Register",
        element: <Register />
      },
    ],
  },
]);

export default router;