import appConfigObject from "../../app.config";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import getPosterURL from "../../utils/dataLayer/getPosterURL";
import addToWishList from "../../utils/networkLayer/addToWishList";

const useMovieDetailsState = (movieDetails) => {
  const {
    original_title: name,
    spoken_languages: languages,
    tagline,
    id,
    genres,
    backdrop_path: posterBlob,
    vote_average: voteAverage,
    vote_count: voteCount,
    overview: description,
  } = movieDetails;

  const themeNameToClass = {
    action: "--action",
    adventure: "--adventure",
    animation: "--animation",
  };

  const { themes } = appConfigObject;

  const router = useRouter();

  const [theme, setTheme] = useState(null);

  const posterUrl = getPosterURL(posterBlob);

  useEffect(() => {
    if (
      router?.query?.theme &&
      themes.includes(router.query.theme.toLowerCase())
    ) {
      setTheme(router.query.theme);
    }
  }, []);

  const handleAddToWishList = () => addToWishList(movieDetails);

  const getFontClassForTheme = (themeName) => {
    if (themeName) {
      return `font${themeNameToClass[themeName]}`;
    }
    return "";
  };

  return {
    posterUrl,
    theme,
    description,
    voteCount,
    voteAverage,
    id,
    themeNameToClass,
    tagline,
    languages,
    name,
    handleAddToWishList,
    getFontClassForTheme,
  };
};

export default useMovieDetailsState;
