import { get } from "@/utils/html";
import { useState, useEffect } from "react";

type useServiceResponseApi<T> = {
  isLoading: boolean;
  error: Error | undefined;
  data: T | undefined;
};

export function useService<T>(url: string): useServiceResponseApi<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        setData(await get<T>(url));
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
}
