import { ROUTES } from "@/constants/routes";
import { PodcastEpisode } from "@/types/podcastEpisode";
import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  episodes: PodcastEpisode[];
  podcastId: string;
}

export default function PodcastEpisodesTable({ episodes, podcastId }: Props) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 1 }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {episodes.map((episode) => (
            <TableRow key={episode.trackId}>
              <TableCell>
                <Link
                  component={RouterLink}
                  to={ROUTES.PODCAST_EPISODE.replace(
                    ":podcastId",
                    podcastId
                  ).replace(":episodeId", `${episode.trackId}`)}
                  underline="hover"
                >
                  {episode.trackName}
                </Link>
              </TableCell>
              <TableCell>
                {new Date(episode.releaseDate).toLocaleDateString()}
              </TableCell>
              <TableCell align="right">
                {new Date(episode.trackTimeMillis).toLocaleTimeString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
