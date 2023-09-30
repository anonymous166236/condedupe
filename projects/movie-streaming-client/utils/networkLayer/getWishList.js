const getWishList = () => {
  let moviesList = sessionStorage.getItem("wishList");
  if (moviesList !== undefined) {
    return JSON.parse(moviesList);
  }
  return null;
};

export default getWishList;
