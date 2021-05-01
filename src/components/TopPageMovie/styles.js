import styled from 'styled-components';

export const HighlightedMovieContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ backdrop_path }) =>
    `url(https://image.tmdb.org/t/p/original${backdrop_path})`};
  transition: all linear 2s;

  * {
    z-index: 0;
  }
`;

export const BgContainer = styled.div``;

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: 100%;
  width: 600px;

  * {
    margin-bottom: 10px;
  }
`;

export const VoteDateContainer = styled.div`
  display: flex;
`;

export const OverviewContainer = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const WatchButton = styled.button`
  cursor: pointer;
  border: none;
  text-decoration: none;
  color: black;
  font-weight: 1000;
  padding: 10px;
  border-radius: 3px;
  margin: 10px 10px 10px 0;
`;

export const AddToListButton = styled(WatchButton)`
  color: white;
  background: #333;
`;

export const Paragraph = styled.p``;

export const BoldParagraph = styled(Paragraph)`
  font-weight: 1000;
  margin-left: 20px;
`;

export const VoteParagraph = styled.p`
  color: #46d369;
  font-weight: 1000;
`;
