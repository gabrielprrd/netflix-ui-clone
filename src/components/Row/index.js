import React, { useState, useEffect, useContext, useRef } from 'react';

// Styles
import * as S from './styles';

// Components
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Context
import { SelectedMovieContext } from '../../store/SelectedMovieProvider';

// Store
import store from '../../store/store';

export default function Row({ row }) {
  const [rowPosition, setRowPosition] = useState(0);
  const [rowWidth, setRowWidth] = useState(0); // in vw
  const { setSelectedMovie } = useContext(SelectedMovieContext);
  const posterRef = useRef(null);

  // set movie to TopPageMovie element
  const selectMovie = (id) => {
    store.getMovieInfo(id).then((data) => setSelectedMovie(data));
  };

  // Pixel to viewport unit converter
  function convertPXToVW(px) {
    return Math.round(px * (100 / document.documentElement.clientWidth));
  }

  useEffect(() => {
    if (posterRef.current) {
      //row size in pixels
      const rowSizeInPixels =
        posterRef.current.offsetWidth * row.items.results.length;

      // convert row size to vws
      const rowSizeInVws = convertPXToVW(rowSizeInPixels);
      setRowWidth(rowSizeInVws);
    }
  }, [posterRef]);

  const handleBeforeIconClick = () => {
    let windowInVw = convertPXToVW(window.innerWidth);

    if (rowPosition >= 0) {
      setRowPosition(0);
      return;
    }
    setRowPosition(rowPosition + windowInVw);
  };

  const handleNextIconClick = () => {
    let windowInVw = convertPXToVW(window.innerWidth);

    let remainingRowWidth = rowWidth + rowPosition;

    if (remainingRowWidth <= 130) {
      setRowPosition(-rowWidth + windowInVw);
      return;
    } else {
      setRowPosition(rowPosition - windowInVw);
    }
  };

  return (
    <S.MovieRowOuterContainer>
      <S.BeforeIconContainer rowPosition={rowPosition}>
        <NavigateBeforeIcon
          style={{ fontSize: 50 }}
          onClick={handleBeforeIconClick}
        />
      </S.BeforeIconContainer>
      <h1>{row.title}</h1>
      <S.MoviesRow rowPosition={rowPosition}>
        {row.items.results.map((item) => {
          const { id, name, poster_path } = item;

          return (
            <S.MovieContainer
              key={id}
              onClick={() => selectMovie(id)}
              ref={posterRef}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={name}
              ></img>
            </S.MovieContainer>
          );
        })}
      </S.MoviesRow>
      <S.NextIconContainer>
        <NavigateNextIcon
          style={{ fontSize: 50 }}
          onClick={handleNextIconClick}
        />
      </S.NextIconContainer>
    </S.MovieRowOuterContainer>
  );
}
