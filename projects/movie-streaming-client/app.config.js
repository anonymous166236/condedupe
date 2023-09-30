const appConfigObject = {
  carouselResponsiveConfig: {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 1440 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 1440, min: 900 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 900, min: 650 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2,
    },
  },
  posterCDNBlob: "https://image.tmdb.org/t/p/original",
  movieURIBlob: "https://api.themoviedb.org/3",
  themes: ["action", "adventure", "animation"],
};

export default appConfigObject;
