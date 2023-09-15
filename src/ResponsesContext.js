// ResponsesContext.js
import { createContext, useContext, useState } from 'react';

// Create a context
export const ResponsesContext = createContext();

export function useResponses() {
  return useContext(ResponsesContext);
}

// Create a context provider component
export function ResponsesProvider({ children }) {
  const [travelInputResponse, setTravelInputResponse] = useState('');
  const [travelListResponse, setTravelListResponse] = useState('');
  const [dateTimeResponse, setDateTimeResponse] = useState('');
  const [searchResponse, setSearchResponse] = useState('');

  return (
    <ResponsesContext.Provider
      value={{
        travelInputResponse,
        setTravelInputResponse,
        travelListResponse,
        setTravelListResponse,
        dateTimeResponse,
        setDateTimeResponse,
        searchResponse,
        setSearchResponse,
      }}
    >
      {children}
    </ResponsesContext.Provider>
  );
}