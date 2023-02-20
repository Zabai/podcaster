import { PodcastEpisode } from "@/types/podcastEpisode";
import { Box, Divider, Paper, Typography } from "@mui/material";

interface Props {
  episode: PodcastEpisode;
}

export default function PodcastEpisodeCard({ episode }: Props) {
  return (
    <Paper sx={{ padding: 2 }}>
      <Typography
        color="textPrimary"
        fontSize={14}
        fontWeight={500}
        variant="h1"
      >
        {episode.trackName}
      </Typography>

      <Typography
        color="textSecondary"
        dangerouslySetInnerHTML={{
          __html: episode.description,
        }}
        fontSize={12}
        marginY={1}
        whiteSpace="normal"
        variant="body1"
      />

      <Divider sx={{ marginX: 0 }} variant="middle" />

      <Box marginTop={1}>
        <audio controls>
          <source src={episode.episodeUrl} type="audio/mpeg" />
        </audio>
      </Box>
    </Paper>
  );
}
