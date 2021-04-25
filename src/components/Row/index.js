import React, { useState, useContext } from 'react';
import * as S from './styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Row({ row }) {
  const [rowPosition, setRowPosition] = useState(0);

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
            <div key={id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                  alt={name}
                ></img>
                <h2>{name}</h2>
              </div>
            </div>
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
