/**
 * Generic data fetching hook
 */

import { useEffect, useState } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";

// Generic interface
interface FetchResponse<T> {
  count: number;
  results: T[];
}

export function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Send a fetch request to the backend
  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          // Strict mode에서 처음 요청이 취소되었을 경우 표시되는 메시지 제외
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}
