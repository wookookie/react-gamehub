import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// Hiding details behind the 'useGenres' hook
export function useGenres() {
  // Static data 사용
  // 사용 중인 컴포넌트가 영향을 받지 않도록 하기 위해 hook과 동일한 항목 반환
  return { data: genres, error: null, isLoading: false };
}
