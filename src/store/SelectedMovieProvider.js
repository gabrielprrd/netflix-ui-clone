// Provides the movie that is selected and hightlighted
import React, { useState, useEffect, createContext } from 'react';

// Store
import store from '../store/store';

export const SelectedMovieContext = createContext();

export default function SelectedMovieProvider({ children }) {
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <SelectedMovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
      }}
    >
      {children}
    </SelectedMovieContext.Provider>
  );
}
