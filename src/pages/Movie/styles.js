import styled from 'styled-components';

export const MoviePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-image: ${({ bgImage }) =>
    `url(https://image.tmdb.org/t/p/original${bgImage})`};

  p {
    font-size: 2em;
    margin-bottom: 40px;
  }

  a {
    margin-top: 40px;
    color: white;
  }

  * {
    z-index: 99;
  }
`;

export const BgOverrideContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.9065826159565389) 33%,
    rgba(0, 0, 0, 0.3323529240797881) 100%
  );
`;

export const BgOverrideContainerVertical = styled(BgOverrideContainer)`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.700717787114846) 0%,
    rgba(0, 0, 0, 0.4822303921568627) 40%,
    rgba(255, 252, 245, 0) 100%
  );
`;
