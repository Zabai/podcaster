import { PodcastEpisode } from "@/types/podcastEpisode";

export interface PodcastDetailsResponse {
  resultCount: number;
  results: PodcastEpisode[];
}
