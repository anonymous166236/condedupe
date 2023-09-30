import getGenreList from "../utils/SSR/getGenreList";
import getMovieList from "../utils/SSR/getMovieList";
import generateCarouselData from "../utils/dataLayer/generateCarouselData";

//view
import HomeView from "../views/home";

const HomePage = (props) => <HomeView carouselData={props.viewData} />;

export default HomePage;

export async function getServerSideProps(context) {
  const genreObjectArray = await getGenreList(3); //just get 3 for now
  let awaitMoviesForGenres = [];
  for (let genreObject of genreObjectArray) {
    awaitMoviesForGenres.push(getMovieList(genreObject.id));
  }
  let moviesListsArray = await Promise.all(awaitMoviesForGenres);

  return {
    props: {
      viewData: generateCarouselData(genreObjectArray, moviesListsArray),
    },
  };
}
