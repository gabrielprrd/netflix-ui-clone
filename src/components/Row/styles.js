import styled from 'styled-components';
import device from '../../assets/device';

export const MovieRowOuterContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const MoviesRow = styled.div`
  display: flex;
  transition: linear 1s;
  margin-top: 20px;
  transform: translateX(${({ rowPosition }) => rowPosition + 'vw'});
  z-index: 1;

  &&:focus-within div,
  &&:hover div {
    transform: translateX(-5%);
  }
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

export const MovieContainer = styled.div`
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;
  z-index: 99;
  margin: 0 3px;
  cursor: pointer;

  img {
    display: block;
    width: 15vw;

    @media ${device.tablet} {
      width: 40vw;
    }
  }

  &&:focus,
  &&:hover {
    -webkit-transform: scale(1.1) !important;

    ~ div {
      transform: translateX(5%);
    }
  }
`;
