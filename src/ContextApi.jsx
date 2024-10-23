import React, { createContext, useContext, useState } from 'react';

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <ContextApi.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useEmail = () => useContext(ContextApi);
