import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import * as S from './styles';

export default function PageNotFound() {
  return (
    <S.PageNotFound>
      <h1>Page not found :(</h1>
      <Link to={'/'}>Back to home page</Link>
    </S.PageNotFound>
  );
}
