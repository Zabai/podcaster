import { fetcher } from "@/api/fetch";
import { GET_PODCASTS } from "@/constants/endpoints";
import useSWRImmutable from "swr/immutable";
import { PodcastsResponse } from "./types";

export default function usePodcasts() {
  return useSWRImmutable<PodcastsResponse>(GET_PODCASTS, fetcher);
}
