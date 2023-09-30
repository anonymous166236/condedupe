import makeHTTPCall from "../networkLayer/makeHTTPCall";

const getGenreList = async (numberOfGenre) => {
  let response = await makeHTTPCall("genre/movie/list");
  let genreObjectArray = response.genres;

  if (numberOfGenre && numberOfGenre < genreObjectArray.length) {
    return genreObjectArray.slice(0, numberOfGenre);
  }

  return genreObjectArray;
};

export default getGenreList;
