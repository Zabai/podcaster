import { PodcastDetails, PodcastEpisode } from "@/types/podcastEpisode";

export interface PodcastDetailsResponse {
  resultCount: number;
  results: [PodcastDetails, ...PodcastEpisode[]];
}
