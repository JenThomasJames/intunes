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
      console.log(error.response.data.message);
      if (error.response.status === 500) {
        setError({
          isError: true,
          error: "The server went on a coffee break. Will be back soon!",
        });
      } else {
        setError({
          isError: true,
          error: error.response.data.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fireRequest, setError };
};
export default useHttp;
