import useMovieDetails from "./useMovieDetailsState";

import Button from "../../components/button";
import Image from "next/image";

const MovieDetailsView = (movieDetails) => {
  let { details } = movieDetails;

  let {
    posterUrl,
    theme,
    description,
    voteCount,
    voteAverage,
    id,
    themeNameToClass,
    tagline,
    languages,
    name,
    handleAddToWishList,
    getFontClassForTheme,
  } = useMovieDetails(details);

  const getButtonWithTheme = (themeName) => {
    //an HOC to modify core component according to the theme

    return (
      <div className={`wishlist_button${themeNameToClass[themeName]}`}>
        <Button label="Add to wishlist" onClick={handleAddToWishList} />
      </div>
    );
  };

  return (
    <div
      // className={`details_view details_view--${primaryGenre}`}
      className={`details_view ${getFontClassForTheme(theme)}`}
      data-cy="movie-details"
    >
      <section className="poster_and_review_container">
        <div className="poster_and_review_container__poster" data-cy="poster">
          <Image
            blurDataURL={posterUrl}
            src={posterUrl}
            placeholder="blur"
            layout="responsive"
            width={200}
            height={120}
          />
          {/* <img src={posterUrl} /> */}
        </div>
        {/* Only display when language data available */}
        {languages.length > 0 && (
          <div className="poster_and_review_container__languages">
            Available in:
            {languages.map((languageObject) => (
              <span>{languageObject.english_name}</span>
            ))}
          </div>
        )}
      </section>
      <section className="details_container">
        <div className="details_container__heading_and_wishlist">
          <h1>{name}</h1>
          {theme ? (
            getButtonWithTheme(theme)
          ) : (
            //buttin without theme
            <Button label="Add to wishlist" onClick={handleAddToWishList} />
          )}
        </div>
        <h4 className="details_container__tagline">{tagline}</h4>
        <p className="details_container__description">{description}</p>
        <p className="details_container__reviews">
          {Math.round(voteAverage)} Stars Out of 10
        </p>
        <p className="details_container__users">
          Total {voteCount} users rated this movies
        </p>
      </section>
    </div>
  );
};

export default MovieDetailsView;
