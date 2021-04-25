import React, { useContext } from 'react';
import * as S from './styles';

// Data
import { SelectedMovieContext } from '../../store/SelectedMovieProvider';

export default function TopPageMovie() {
  const { selectedMovie, setSelectedMovie } = useContext(SelectedMovieContext);
  const {
    name,
    overview,
    backdrop_path,
    vote_average,
    categories,
    first_air_date,
  } = selectedMovie;

  const releaseDate = first_air_date.split('-')[0];

  return (
    <S.HighlightedMovieContainer backdrop_path={backdrop_path}>
      <S.BgOverrideContainer>
        <S.TextContainer>
          <h1>{name}</h1>
          <S.VoteDateContainer>
            <S.VoteParagraph>{vote_average} points</S.VoteParagraph>
            <S.BoldParagraph>{releaseDate}</S.BoldParagraph>
          </S.VoteDateContainer>
          <S.OverviewContainer>
            <S.Paragraph>{overview}</S.Paragraph>
          </S.OverviewContainer>
          <S.ButtonsContainer>
            <S.WatchButton>Watch</S.WatchButton>
            <S.AddToListButton>+ My List</S.AddToListButton>
          </S.ButtonsContainer>
        </S.TextContainer>
      </S.BgOverrideContainer>
    </S.HighlightedMovieContainer>
  );
}
