import React, { useEffect, useState } from 'react';

// Components
import Header from '../../components/Header';
import Row from '../../components/Row/index';

// Data
import store from '../../store/store';

// Styles
//import * as S from './styles';

export default function Home() {
  const [list, setList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const moviesList = await store.getHomeList();
      setList(moviesList);
      console.log(moviesList);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {list.map((info) => {
        return (
          <div>
            <Row row={info} key={info.slug} />
          </div>
        );
      })}
    </div>
  );
}
