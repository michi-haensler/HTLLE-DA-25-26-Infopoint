import { useState, useEffect, useCallback } from 'react';

interface UseFetchOptions<T> {
  initialData?: T;
  enabled?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseFetchResult<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
): UseFetchResult<T> {
  const { initialData, enabled = true, onSuccess, onError } = options;

  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    const resolvedUrl = typeof url === 'function' ? url() : url;
    
    if (!resolvedUrl) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(resolvedUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const json = await response.json();
      setData(json);
      onSuccess?.(json);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Ein Fehler ist aufgetreten');
      setError(error);
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [url, onSuccess, onError]);

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled, fetchData]);

  return { data, loading, error, refetch: fetchData };
}

// Specialized hook for API calls with base URL
const API_BASE = '/api/v1';

export function useApi<T>(
  endpoint: string | (() => string),
  options: UseFetchOptions<T> = {}
): UseFetchResult<T> {
  const url = typeof endpoint === 'function' 
    ? () => `${API_BASE}${endpoint()}`
    : `${API_BASE}${endpoint}`;
    
  return useFetch<T>(url, options);
}
