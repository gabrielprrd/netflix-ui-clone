// Provides the movie that is selected and hightlighted
import React, { useState, createContext } from 'react';

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
