import Header from "@/features/Header";
import PodcastDetailsCard from "@/features/PodcastDetailsCard";
import PodcastEpisodesTable from "@/features/PodcastEpisodesTable";
import usePodcast from "@/hooks/usePodcast";
import {
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

export default function PodcastDetails() {
  const { podcastId } = useParams();
  const { data, error } = usePodcast(podcastId ?? "");

  if (error || !podcastId) return <div>error</div>;
  if (!data) return <CircularProgress />;

  return (
    <Container maxWidth="md">
      <Header />

      <Grid container columnSpacing={12} marginTop={2}>
        <Grid item md={4}>
          <PodcastDetailsCard episode={data.results.at(0)} />
        </Grid>

        <Grid item md={7}>
          <Paper sx={{ padding: 1 }}>
            <Typography fontWeight="bold" variant="h6">
              {`Episodes: ${data.resultCount}`}
            </Typography>
          </Paper>

          <PodcastEpisodesTable episodes={data.results} podcastId={podcastId} />
        </Grid>
      </Grid>
    </Container>
  );
}
