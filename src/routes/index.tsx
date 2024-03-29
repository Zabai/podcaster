import { ROUTES } from "@/constants/routes";
import { createBrowserRouter } from "react-router-dom";
import EpisodeDetails from "./EpisodeDetails";
import Home from "./Home";
import PodcastDetails from "./PodcastDetails";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PODCAST_DETAILS,
    element: <PodcastDetails />,
  },
  {
    path: ROUTES.PODCAST_EPISODE,
    element: <EpisodeDetails />,
  },
]);

export default router;
