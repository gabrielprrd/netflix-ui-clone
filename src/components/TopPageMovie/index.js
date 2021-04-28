import React, { useContext } from 'react';
import * as S from './styles';

// Data
import { SelectedMovieContext } from '../../store/SelectedMovieProvider';

export default function TopPageMovie() {
  const { selectedMovie } = useContext(SelectedMovieContext);
  const {
    title,
    overview,
    backdrop_path,
    vote_average,
    genres,
    release_date,
  } = selectedMovie;

  // release_date
  return (
    <S.HighlightedMovieContainer backdrop_path={backdrop_path}>
      <S.BgOverrideContainer>
        <S.BgOverrideContainerVertical>
          <S.TextContainer>
            <h1>{title}</h1>
            <S.VoteDateContainer>
              <S.VoteParagraph>{vote_average} points</S.VoteParagraph>
              <S.BoldParagraph>{release_date.split('-')[0]}</S.BoldParagraph>
            </S.VoteDateContainer>
            <S.OverviewContainer>
              <S.Paragraph>{overview}</S.Paragraph>
            </S.OverviewContainer>
            <S.ButtonsContainer>
              <S.WatchButton>Watch</S.WatchButton>
              <S.AddToListButton>+ My List</S.AddToListButton>
            </S.ButtonsContainer>
          </S.TextContainer>
        </S.BgOverrideContainerVertical>
      </S.BgOverrideContainer>
    </S.HighlightedMovieContainer>
  );
}
