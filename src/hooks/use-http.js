import axios from "axios";
import { useState } from "react";

const useHttp = () => {
  const [error, setError] = useState({ isError: false, error: null });
  const [isLoading, setIsLoading] = useState(false);

  const fireRequest = async (config) => {
    setIsLoading(true);
    try {
      const response = await axios(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : null,
        data: config.data ? config.data : null,
      });
      return response.data;
    } catch (error) {
      setError({
        isError: true,
        error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fireRequest };
};
export default useHttp;
