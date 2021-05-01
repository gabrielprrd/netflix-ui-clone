import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Data
import { SelectedMovieContext } from '../../store/SelectedMovieProvider';

// Styles
import * as S from './styles';

export default function TopPageMovie() {
  const { selectedMovie } = useContext(SelectedMovieContext);
  const {
    id,
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
            <div>
              <p>
                Genres:{' '}
                {genres.map((item, index) => (
                  <span key={index}>
                    {item.name}
                    {index !== genres.length - 1 && <span>,</span>}{' '}
                  </span>
                ))}
              </p>
            </div>
            <S.ButtonsContainer>
              <Link
                to={{
                  pathname: `/watch/${id}`,
                  state: { movie: { title, backdrop_path } },
                }}
              >
                <S.WatchButton>Watch</S.WatchButton>
              </Link>

              <S.AddToListButton>+ My List</S.AddToListButton>
            </S.ButtonsContainer>
          </S.TextContainer>
        </S.BgOverrideContainerVertical>
      </S.BgOverrideContainer>
    </S.HighlightedMovieContainer>
  );
}
