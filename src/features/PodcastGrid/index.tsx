import RoundImageCard from "@/components/cards/RoundImageCard";
import { ROUTES } from "@/constants/routes";
import usePodcasts from "@/hooks/usePodcasts";
import usePodcastsFilter from "@/hooks/usePodcastsFilter";
import { CircularProgress, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { getPodcastHigherResImage } from "./utils";

export default function PodcastGrid() {
  const { data, error } = usePodcasts();
  const filteredPodcasts = usePodcastsFilter(data?.feed.entry);

  if (error) return <div>Error</div>;
  if (!data) return <CircularProgress />;

  return (
    <Grid container columnSpacing={4} rowSpacing={12}>
      {filteredPodcasts.map((podcast) => (
        <Grid item key={podcast.id.attributes["im:id"]} md={3}>
          <Link
            component={RouterLink}
            underline="none"
            to={ROUTES.PODCAST_DETAILS.replace(
              ":podcastId",
              podcast.id.attributes["im:id"]
            )}
          >
            <RoundImageCard
              image={getPodcastHigherResImage(podcast).label}
              subtitle={`Author: ${podcast["im:artist"].label}`}
              title={podcast["im:name"].label}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
