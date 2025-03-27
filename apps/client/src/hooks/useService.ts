import { get } from "@/utils/html";
import { useState, useEffect } from "react";
import { useServiceResponse } from "@at/types";

export function useService<T>(url: string): useServiceResponse<T> {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsPending(true);
        setData(await get<T>(url));
      } catch (e) {
        setIsError(true);
        setError(e as Error);
      } finally {
        setIsPending(false);
      }
    };
    fetch();
  }, []);

  return {
    isPending,
    isError,
    error,
    data,
  };
}
