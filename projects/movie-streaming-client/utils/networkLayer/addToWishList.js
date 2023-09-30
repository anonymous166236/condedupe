const addToWishList = (movieDetails) => {
  let wishListObject = JSON.parse(sessionStorage.getItem("wishList"));
  if (wishListObject && Object.keys(wishListObject).includes(movieDetails.id)) {
    return;
  }
  sessionStorage.setItem(
    "wishList",
    JSON.stringify({
      ...wishListObject,
      [movieDetails.id]: movieDetails,
    })
  );
};

export default addToWishList;
