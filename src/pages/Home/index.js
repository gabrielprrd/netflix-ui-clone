import React, { useEffect, useState } from 'react';
import store from '../../store/store';

export default function Home() {
  //const [list, setList] = useState([]);

  useEffect(() => {
    const loadList = async () => {
      const list = await store.getHomeList();
      console.log(list);
    };

    loadList();
  });

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
