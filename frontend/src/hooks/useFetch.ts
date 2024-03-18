import { useEffect, useState } from "react";

interface UseFetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

interface UseFetchResults<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(url: RequestInfo, options?: UseFetchOptions): UseFetchResults<T> => {
  
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const abortCont = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true)
        const token = localStorage.getItem('token')
        const response = await fetch(import.meta.env.VITE_API_URL + url, {
          method: options?.method || 'GET',
          headers: options?.headers || {
            'authorization': `${token}`,
            'Content-Type': 'application/json',
          },
          body: options?.body,
          signal: abortCont.signal
        })
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const result = await response.json();
        setData(result)

      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => abortCont.abort()
  }, [url, options])
  return { data, loading, error }
}
export default useFetch;