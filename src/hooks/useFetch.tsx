

import React, { useEffect, useState } from 'react';



interface fetchState <T> {
    data: T | null;
    loading:boolean;
    error:string | null
}

const useFetch = <T,>(url:string) => {

    const [state,setState]=useState<fetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const json = (await res.json()) as T;
        setState({ data: json, loading: false, error: null });
      } catch (err: any) {
        setState({ data: null, loading: false, error: err.message });
      }
    };

    fetchData()

  },[])

    return state;
};

export default useFetch;