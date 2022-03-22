import { useState ,useCallback} from "react";

      const useRequest = () => {
                const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [tasks, setTasks] = useState([]);

  const sendReq =  useCallback(async (bodyConfig, actionHandler) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(bodyConfig.url, {
        method: bodyConfig.method ? bodyConfig : "GET",
        header: bodyConfig.header ? bodyConfig.header : {},
        body: bodyConfig.body ? JSON.stringify(bodyConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      // const loadedTasks = [];

      // for (const taskKey in data) {
      //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      // }

      actionHandler(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  },[]);

  return {
    error,
    isLoading,
    sendReq,
  };
};

export default useRequest;
