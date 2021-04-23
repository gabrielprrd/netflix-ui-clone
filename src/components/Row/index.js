import React from 'react';
import * as S from './styles';

export default function Row({ row }) {
  return (
    <>
      <h1>{row.title}</h1>
      <S.MoviesRow>
        {row.items.results.map((item) => {
          const { id, name, poster_path } = item;
          return (
            <div>
              <div key={id}>
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
    </>
  );
}
