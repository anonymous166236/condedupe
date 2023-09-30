import getWishList from "../../utils/networkLayer/getWishList";

import MovieCard from "../movieCard/index";

const WishList = () => {
  let wishList = getWishList();
  return (
    <div className="wishlist">
      {wishList !== null ? (
        <div className="wishlist__item">
          {Object.keys(wishList).map((movieId) => (
            <MovieCard
              posterURL={wishList[movieId].poster_path}
              movieName={wishList[movieId].title}
              movieId={movieId}
            />
          ))}
        </div>
      ) : (
        <h4>No movies in your wishlist</h4>
      )}
    </div>
  );
};

export default WishList;
