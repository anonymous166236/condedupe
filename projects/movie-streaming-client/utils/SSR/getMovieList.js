import makeHTTPCall from "../networkLayer/makeHTTPCall";

const getMovieList = async (genreId) => {
  let response = await makeHTTPCall("discover/movie/", {
    with_genres: genreId,
  });
  return response.results; //{page: 1, results: <<moviesArray>>, totalPages: integer, totalResults: integer}
};

export default getMovieList;
