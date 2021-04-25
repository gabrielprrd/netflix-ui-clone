import React, { useEffect, useState, useContext } from 'react';

// Components
import Header from '../../components/Header';
import Row from '../../components/Row/index';
import TopPageMovie from '../../components/TopPageMovie/index';

// Data
import store from '../../store/store';
import { SelectedMovieContext } from '../../store/SelectedMovieProvider';

// Styles
import * as S from './styles';

export default function Home() {
  const [list, setList] = useState([]);
  const [isSelectedMovieReady, setSelectedMovieReady] = useState(false);
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);

  useEffect(() => {
    function fetchData() {
      store.getHomeList().then((data) => {
        setList(data);
        const initialSelectedMovie = data.filter(
          (category) => category.slug === 'originals'
        )[0].items.results[0];
        setSelectedMovie(initialSelectedMovie);
        setSelectedMovieReady(true);
        console.log(selectedMovie);
      });
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(selectedMovie);
  }, [selectedMovie]);

  return (
    <div>
      <Header />
      {isSelectedMovieReady && <TopPageMovie />}
      <S.MovieRowsContainer>
        {list.map((info) => {
          return <Row row={info} key={info.slug} />;
        })}
      </S.MovieRowsContainer>
    </div>
  );
}
