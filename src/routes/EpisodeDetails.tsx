import Header from "@/features/Header";
import PodcastDetailsCard from "@/features/PodcastDetailsCard";
import PodcastEpisodeCard from "@/features/PodcastEpisodeCard";
import usePodcast from "@/hooks/usePodcast";
import { PodcastEpisode } from "@/types/podcastEpisode";
import { CircularProgress, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";

export default function EpisodeDetails() {
  const { episodeId, podcastId } = useParams();
  const { data, error } = usePodcast(podcastId ?? "");

  if (error || !podcastId || !episodeId) return <div>error</div>;
  if (!data) return <CircularProgress />;

  const episode = data.results.find(
    ({ trackId }) => trackId.toString() === episodeId
  );
  if (!episode) return <CircularProgress />;

  return (
    <Container maxWidth="md">
      <Header />

      <Grid container columnSpacing={12} marginTop={2}>
        <Grid item md={4}>
          <PodcastDetailsCard podcast={data.results[0]} />
        </Grid>

        <Grid item md={7}>
          <PodcastEpisodeCard episode={episode as PodcastEpisode} />
        </Grid>
      </Grid>
    </Container>
  );
}
