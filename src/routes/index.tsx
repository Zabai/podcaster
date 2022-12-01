import { ROUTES } from "@/constants/routes";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PODCAST_DETAILS,
    element: <div>Podcast details</div>,
  },
  {
    path: ROUTES.PODCAST_EPISODE,
    element: <div>Podcast episode</div>,
  },
]);

export default router;
