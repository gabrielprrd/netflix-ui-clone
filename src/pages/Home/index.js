import React, { useEffect, useState } from 'react';

// Components
import Row from '../../components/Row/index';

// Data
import store from '../../store/store';

// Styles
//import * as S from './style';

export default function Home() {
  const [list, setList] = useState([]);

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
      <h1>Home Page</h1>

      {list.map((row) => {
        return (
          <div>
            <Row row={row} />
          </div>
        );
      })}
    </div>
  );
}
