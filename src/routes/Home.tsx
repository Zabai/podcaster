import Header from "@/features/Header";
import PodcastGrid from "@/features/PodcastGrid";
import PodcastsSearch from "@/features/PodcastsSearch";
import usePodcasts from "@/hooks/usePodcasts";
import usePodcastsFilter from "@/hooks/usePodcastsFilter";
import { Box, Chip, Container, Stack } from "@mui/material";

export default function Home() {
  const { data } = usePodcasts();
  const filteredPodcasts = usePodcastsFilter(data?.feed.entry);

  return (
    <Container maxWidth="md">
      <Header />
      <Box marginTop={2}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          marginBottom={2}
          spacing={2}
        >
          <Chip color="primary" label={filteredPodcasts.length} />
          <PodcastsSearch />
        </Stack>
        <PodcastGrid />
      </Box>
    </Container>
  );
}
