import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  // a new url or a retry means a new request, so reset right away
  const request = `${url}#${retryCount}`;
  const [lastRequest, setLastRequest] = useState(request);
  if (request !== lastRequest) {
    setLastRequest(request);
    setLoading(true);
    setError(null);
  }

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }
        return response.json();
      })
      .then((json) => {
        if (!ignore) setData(json);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [url, retryCount]);

  function retry() {
    setRetryCount(retryCount + 1);
  }

  return { data, loading, error, retry };
}

export default useFetch;