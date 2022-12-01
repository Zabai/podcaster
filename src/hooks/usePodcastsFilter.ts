import usePodcastsStore from "@/stores/podcastsStore";
import { Podcast } from "@/types/podcast";
import { useMemo } from "react";

export default function usePodcastsFilter(podcasts: Podcast[] | undefined) {
  const searchTerm = usePodcastsStore(
    (state) => state.searchTerm
  ).toLowerCase();

  return useMemo(
    () =>
      (podcasts ?? []).filter(
        (podcast) =>
          podcast.title.label.toLowerCase().includes(searchTerm) ||
          podcast["im:artist"].label.toLowerCase().includes(searchTerm)
      ),
    [podcasts, searchTerm]
  );
}
