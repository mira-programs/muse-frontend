// HeaderContext.js
import React, { createContext, useContext } from 'react';

const HeaderContext = createContext();

export function useHeader() {
  return useContext(HeaderContext);
}

export function HeaderProvider({ children }) {
  // Add state or any logic related to your header here
  // For example:
  const headerContent = 'Header content'; // You can replace this with your actual header content

  return (
    <HeaderContext.Provider value={headerContent}>
      {children}
    </HeaderContext.Provider>
  );
}
