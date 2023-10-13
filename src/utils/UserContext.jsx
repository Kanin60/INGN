import React, { createContext, useState, useContext } from "react";

const AccessKeyContext = createContext();

export const useAccessKey = () => {
  const context = useContext(AccessKeyContext);
  if (!context) {
    throw new Error("not in provider");
  }
  return context;
};

export const AccessKeyProvider = ({ children }) => {
  const [accessKey, setAccessKey] = useState(null);

  return (
    <AccessKeyContext.Provider value={{ accessKey, setAccessKey }}>
      {children}
    </AccessKeyContext.Provider>
  );
};