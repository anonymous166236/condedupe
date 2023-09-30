import { useState } from "react";

const useHeaderState = () => {
  const [showWishList, setShowWishList] = useState(false);

  const handleWishListToggle = () => {
    //lazy load async update
    let updateValue = !showWishList;
    setShowWishList(updateValue);
  };

  return {
    showWishList,
    handleWishListToggle,
  };
};

export default useHeaderState;
