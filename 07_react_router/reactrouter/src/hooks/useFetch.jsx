import { useState, useEffect } from "react";
import internalError from '../assets/Internalserver-error.svg';


// 4 - Custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  // 5 - Refactoring POST
  // Configuration request
  const [config, setConfig] = useState(null);
  // Configuration method
  const [method, setMethod] = useState(null);
  // Another state to call the fetch if need
  const [callFetch, setCallFetch] = useState(false);
  // 6 - Loading
  const [loading, setLoading] = useState(false);
  // 7 - Treating errors
  const [error, setError] = useState(null);
  // 8 - Delete
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6.1 Loading
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          // Handle non-2xx status codes as errors
          throw new Error("Network response was not ok");
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(<p><img src={internalError} alt="Error: loading data"></img></p>);
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  // 5.1 - Refactoring POST
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        const res = await fetch(url, config);
        json = await res.json();
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);
        json = await res.json();
      }

      setCallFetch(json);
    };

    httpRequest();
  }, [config, itemId, method, url]);

  return { data, httpConfig, loading, error };
};
