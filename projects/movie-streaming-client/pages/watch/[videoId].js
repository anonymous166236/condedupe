import getMovieDetails from "../../utils/SSR/getMovieDetails";
import MovieDetailsView from "../../views/movieDetails";

const ProductDetails = (props) => <MovieDetailsView {...props} />;
export default ProductDetails;

export async function getServerSideProps(context) {
  const { videoId } = context.query;
  let movieDetails = null;

  if (videoId) {
    movieDetails = await getMovieDetails(videoId);
  }
  return {
    props: {
      details: movieDetails,
    },
  };
}
