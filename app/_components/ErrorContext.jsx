import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.error("Error captured:", err); // Debugging
    setError(err);
  };

  const resetError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, handleError, resetError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
