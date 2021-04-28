import React, { useState, useContext } from 'react';

// Styles
import * as S from './styles';

// Components
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// Context
import { SelectedMovieContext } from '../../store/SelectedMovieProvider';

// Store
import store from '../../store/store';
//import MovieContainer from './MovieContainer';

export default function Row({ row }) {
  const [rowPosition, setRowPosition] = useState(0);
  const { setSelectedMovie } = useContext(SelectedMovieContext);

  const selectMovie = (id) => {
    store.getMovieInfo(id).then((data) => setSelectedMovie(data));
  };

  const handleBeforeIconClick = () => {
    if (rowPosition >= 0) {
      setRowPosition(0);
      return;
    }
    setRowPosition(rowPosition + 50);
  };

  const handleNextIconClick = () => {
    if (rowPosition <= -200) {
      return;
    }
    setRowPosition(rowPosition - 50);
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
            <S.MovieContainer key={id} onClick={() => selectMovie(id)}>
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
