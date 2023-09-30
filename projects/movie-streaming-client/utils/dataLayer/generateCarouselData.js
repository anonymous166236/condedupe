const generateCarouselData = (genreObjectArray, moviesListArray) => {
  let viewData = {};
  //attaching movies list to genre ID
  for (let i = 0; i < moviesListArray.length; i++) {
    viewData[genreObjectArray[i].name] = moviesListArray[i];
  }
  return viewData;
};

export default generateCarouselData;
