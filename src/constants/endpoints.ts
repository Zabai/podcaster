export const GET_PODCASTS = `https://api.allorigins.win/raw?url=${encodeURIComponent(
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
)}`;

export const GET_PODCAST_DETAILS = `https://api.allorigins.win/raw?url=${encodeURIComponent(
  "https://itunes.apple.com/lookup?id=:podcastId"
)}`;
