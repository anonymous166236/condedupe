// components
import Image from "next/image";
import useMovieCardState from "./useMovieCardState";

const MovieCard = ({
  posterURL = null,
  movieName = "NA",
  movieId = null,
  genreTheme = null,
}) => {
  const { redirectURL, handleCardClick } = useMovieCardState(
    posterURL,
    movieId,
    genreTheme
  );

  return (
    <div className="movie_card" onClick={handleCardClick} data-cy="movie-card">
      <section className="movie_card__poster">
        <Image
          placeholder="blur"
          blurDataURL={redirectURL}
          src={redirectURL}
          layout="responsive"
          width={100}
          height={150}
        />
      </section>
      <section className="movie_card__name">
        <p>{movieName}</p>
      </section>
    </div>
  );
};
export default MovieCard;
