import React from 'react';

export default function Row({ row }) {
  return (
    <div>
      <h1>{row.title}</h1>
      {row.items.results.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
            ></img>
          </div>
        );
      })}
    </div>
  );
}
