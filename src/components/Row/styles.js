import styled from 'styled-components';

export const MovieRowOuterContainer = styled.div`
  position: relative;
`;

export const MoviesRow = styled.div`
  display: flex;
  transition: linear 1s;
  transform: translateX(${({ rowPosition }) => rowPosition + 'vw'});
  z-index: 1;
`;

export const BeforeIconContainer = styled.div`
  position: absolute;
  top: 40%;
  cursor: pointer;
  z-index: 2;
`;

export const NextIconContainer = styled(BeforeIconContainer)`
  right: 0;
`;
