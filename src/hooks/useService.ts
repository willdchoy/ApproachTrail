import { get } from "@/utils/get";
import { useState, useEffect } from "react";

type useServiceResponse<T> = {
  isLoading: boolean;
  error: Error | undefined;
  data: T | undefined;
};

export function useService<T>(url: string): useServiceResponse<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await get<T>(url);
        setData(data);
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
