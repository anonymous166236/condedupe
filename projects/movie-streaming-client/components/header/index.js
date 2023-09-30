import dynamic from "next/dynamic";
import { Suspense } from "react";

import Button from "../../components/button";
import useHeaderState from "./useHeaderState";

const LazyWishlist = dynamic(() =>
  import("../../components/wishList", {
    suspense: true,
  })
);

const LayoutHeader = () => {
  let { showWishList, handleWishListToggle } = useHeaderState();

  return (
    <section className="header" data-cy="header">
      <h2> Header</h2>
      <Button
        label="Your wishlist"
        onClick={handleWishListToggle}
        data-cy="wishlist-button"
      />
      {showWishList ? (
        <div className="wishlist_container" data-cy="wishlist">
          <Suspense fallback={"Loading.."}>
            <LazyWishlist />
          </Suspense>
        </div>
      ) : null}
      {/* {showWishList ? (
        <Suspense fallback={"Loading.."}>
          <LazyWishlist />
        </Suspense>
      ) : null} */}
    </section>
  );
};

export default LayoutHeader;
