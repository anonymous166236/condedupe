import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MovieCard from "../movieCard";

import appConfigObject from "../../app.config";

const CarouselComponent = ({
  heading = "Carousel Heading",
  genreTheme = null,
  itemsArray = [],
}) => {
  let { carouselResponsiveConfig } = appConfigObject;
  return (
    <div className="carousel" data-cy="movie-carousel">
      <section className="carousel__heading">
        <h1>{heading}</h1>
      </section>
      <section className="carousel__slider">
        <Carousel responsive={carouselResponsiveConfig} ssr infinite>
          {itemsArray.map((movieDetails) => (
            <MovieCard
              key={movieDetails.id}
              posterURL={movieDetails.poster_path}
              movieName={movieDetails.title}
              movieId={movieDetails.id}
              genreTheme={genreTheme}
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default CarouselComponent;
