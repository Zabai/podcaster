import useDebounce from "@/hooks/useDebounce";
import usePodcastsStore from "@/stores/podcastsStore";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function PodcastsSearch() {
  const [term, setTerm] = useState("");
  const termDebounce = useDebounce(term, 500);
  const setPodcastSearchTerm = usePodcastsStore((state) => state.setSearchTerm);

  useEffect(() => {
    setPodcastSearchTerm("");
  }, []);

  useEffect(() => {
    setPodcastSearchTerm(termDebounce);
  }, [termDebounce]);

  return (
    <TextField
      id="podcast-filter"
      label="Filter podcasts"
      onChange={(ev) => setTerm(ev.target.value)}
      variant="outlined"
      value={term}
    />
  );
}
