import create from "zustand";

interface PodcastsState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const usePodcastsStore = create<PodcastsState>((set) => ({
  searchTerm: "",
  setSearchTerm(term) {
    set({ searchTerm: term });
  },
}));

export default usePodcastsStore;
