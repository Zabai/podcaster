import { PodcastEpisode } from "@/types/podcastEpisode";
import { Box, Divider, Paper, Typography } from "@mui/material";

interface Props {
  episode: PodcastEpisode | undefined;
}

export default function PodcastDetailsCard({ episode }: Props) {
  return (
    <Paper sx={{ paddingY: 2 }}>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <img
          src={episode?.artworkUrl100}
          alt="Logo"
          style={{ borderRadius: 2 }}
          height={128}
          width={128}
        />
      </Box>

      <Divider variant="middle" />

      <Box margin={2}>
        <Typography color="textPrimary" fontSize={14} variant="h6">
          {episode?.collectionName}
        </Typography>

        <Typography color="textSecondary" fontSize={12} variant="body2">
          by {episode?.artistName}
        </Typography>
      </Box>

      <Divider variant="middle" />

      <Box marginX={1} marginY={2}>
        <Typography color="textSecondary" fontSize={14} variant="h6">
          Description
        </Typography>

        <Typography
          color="textSecondary"
          fontSize={12}
          fontStyle="italic"
          variant="body2"
        >
          {episode?.primaryGenreName}
        </Typography>
      </Box>
    </Paper>
  );
}
