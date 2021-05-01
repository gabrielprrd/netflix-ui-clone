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

// Assets
import { ReactComponent as LoadingIcon } from '../../assets/svg/loading.svg';

export default function Home() {
  const [list, setList] = useState([]);
  const [isSelectedMovieReady, setSelectedMovieReady] = useState(false);
  const { setSelectedMovie } = useContext(SelectedMovieContext);

  useEffect(() => {
    function fetchData() {
      store
        .getHomeList()
        .then((data) => {
          setList(data);
          return data;
        })
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * 4);

          const initialSelectedMovie = data.filter(
            (category) => category.slug === 'trending'
          )[0].items.results[randomIndex];

          store.getMovieInfo(initialSelectedMovie.id).then((movieInfo) => {
            setSelectedMovie(movieInfo);
            setSelectedMovieReady(true);
          });
        });
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isSelectedMovieReady ? (
        <TopPageMovie />
      ) : (
        <S.LoadingIconContainer>
          <LoadingIcon />
        </S.LoadingIconContainer>
      )}
      <S.MovieRowsContainer>
        {list.map((info) => {
          return <Row row={info} key={info.slug} />;
        })}
      </S.MovieRowsContainer>
    </>
  );
}
