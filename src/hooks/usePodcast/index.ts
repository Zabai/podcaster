import { fetcher } from "@/api/fetch";
import { GET_PODCAST_DETAILS } from "@/constants/endpoints";
import useSWRImmutable from "swr/immutable";
import { PodcastDetailsResponse } from "./types";

export default function usePodcast(podcastId: string) {
  return useSWRImmutable<PodcastDetailsResponse>(
    GET_PODCAST_DETAILS.replace(":podcastId", podcastId),
    fetcher
  );
}
