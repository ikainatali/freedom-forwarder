import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Error from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
    ],
  },
]);

export default router;
