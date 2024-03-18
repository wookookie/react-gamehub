import { useData } from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// Hiding details behind the 'useGenres' hook
export function useGenres() {
  return useData<Genre>("/genres");
}
