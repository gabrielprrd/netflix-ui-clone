import React from 'react';
import * as S from './styles';

export default function Footer() {
  return (
    <S.Footer>
      <p>This website is only an UI-Clone. All rights go to Netflix.</p>

      <p>
        Developed by <a href="https://github.com/gabrielprrd">Gabriel Afonso</a>
      </p>
      <p>
        API provided by <a href="https://developers.themoviedb.org/3">TMDb</a>
      </p>
    </S.Footer>
  );
}
