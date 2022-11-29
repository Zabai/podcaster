import { Icon, Link, Podcast } from "@/types/podcast";

export interface PodcastsResponse {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Podcast[];
  updated: Icon;
  rights: Icon;
  title: Icon;
  icon: Icon;
  link: Link[];
  id: Icon;
}

export interface Author {
  name: Icon;
  uri: Icon;
}
