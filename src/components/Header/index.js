import React, { useState, useEffect } from 'react';
import netflixLogo from '../../assets/img/netflix-logo.png';
import netflixAvatar from '../../assets/img/netflix-avatar.png';

import * as S from './styles';

export default function Header() {
  const [headerColor, setHeaderColor] = useState('transparent');

  //not working
  /*useEffect(() => {
    const checkYPosition = () => {
      if (window.scrollY >= 0) {
        setHeaderColor('black');
        console.log(headerColor);
      } else {
        setHeaderColor('transparent');
        console.log(headerColor);
      }
    };

    window.addEventListener('scroll', checkYPosition);

    return () => {
      window.removeEventListener('scroll', checkYPosition);
    };
  }, [window.scrollY]);*/

  return (
    <S.Header headerColor={headerColor}>
      <S.LogoContainer>
        <img src={netflixLogo} alt="netflix logo" />
      </S.LogoContainer>
      <S.AvatarContainer>
        <img src={netflixAvatar} alt="user avatar" />
      </S.AvatarContainer>
    </S.Header>
  );
}
