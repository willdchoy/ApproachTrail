import { get } from "../utils/get";
import { useState } from "react";

export function useService<T>(url: string) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [data, setData] = useState<T | undefined>();

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

  return {
    isLoading,
    error,
    data,
    fetch,
  };
}
