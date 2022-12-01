import { Podcast } from "@/types/podcast";

export function getPodcastHigherResImage(podcast: Podcast) {
  return podcast["im:image"].reduce((prev, current) =>
    +prev.attributes.height > +current.attributes.height ? prev : current
  );
}
