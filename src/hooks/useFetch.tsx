'use client';

import React, { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const json = (await res.json()) as T;
        setState({ data: json, loading: false, error: null });
      } catch (err: unknown) {
        let message = "An unknown error occurred";
        if (err instanceof Error) {
          message = err.message;
        }
        setState({ data: null, loading: false, error: message });
      }
    };

    fetchData();
  }, [url]); // <-- dependency add করা হলো

  return state;
};

export default useFetch;
