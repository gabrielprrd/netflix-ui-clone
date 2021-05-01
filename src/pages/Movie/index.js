import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Styles
import * as S from './styles';

import { ReactComponent as LoadingIcon } from '../../assets/svg/loading.svg';

function Movie({ location }) {
  const { title, backdrop_path } = location.state.movie;
  return (
    <>
      <S.MoviePageContainer bgImage={backdrop_path}>
        <p>Eternal loading for {title}</p>
        <LoadingIcon />
        <Link to={`/`}>Back to home page</Link>
      </S.MoviePageContainer>
      <S.BgOverrideContainer />
      <S.BgOverrideContainerVertical />
    </>
  );
}

// we can't pass props directly to this component since the router switch is on App.js
// withRouter HOC will attach the location object from react-router-dom and now we can pass props
// from any component. In this case: Home
export default withRouter(Movie);
