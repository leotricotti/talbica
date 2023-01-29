import { useState } from "react";

const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  const clearError = () => {
    setError(null);
  };

  return [error, handleError, clearError];
};

export default useErrorHandler;
