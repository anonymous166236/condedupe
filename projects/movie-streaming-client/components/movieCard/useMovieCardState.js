import appConfigObject from "../../app.config";
import { useRouter } from "next/router";

const useMovieCardState = (posterURL, movieId, genreTheme) => {
  const { posterCDNBlob } = appConfigObject;

  const redirectURL = `${posterCDNBlob}${posterURL}`;
  const router = useRouter();

  const handleCardClick = () => {
    if (movieId) {
      if (genreTheme) {
        router.push(`/watch/${movieId}?theme=${genreTheme}`);
      } else {
        router.push(`/watch/${movieId}`);
      }
    }
  };

  return {
    redirectURL,
    handleCardClick,
  };
};

export default useMovieCardState;
