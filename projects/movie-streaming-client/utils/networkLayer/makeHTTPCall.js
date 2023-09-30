import appConfigObject from "../../app.config";
import generateURLWithQuery from "./generateURLWithQuery";

/**
 * A wrapper function on fetch
 * returns data in JSON by default
 */
const makeHTTPCall = async (url, queryParameterObject) => {
  const { movieURIBlob } = appConfigObject;
  let finalURL = `${movieURIBlob}/${url}?api_key=${process.env.TMDB_key}`;

  if (queryParameterObject && Object.keys(queryParameterObject).length) {
    finalURL = generateURLWithQuery(finalURL, queryParameterObject);
  }

  let response = await fetch(finalURL);
  let responseInJSON = await response.json();

  return responseInJSON;
};

export default makeHTTPCall;
