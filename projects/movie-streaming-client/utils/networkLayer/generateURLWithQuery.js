const generateURLWithQuery = (url, queryParameterObject) => {
  let queryBlob = "";
  let urlWithQueryParam = null;
  for (const property in queryParameterObject) {
    queryBlob = `${property}=${queryParameterObject[property]}&${queryBlob}`;
  }

  urlWithQueryParam = `${url}&${queryBlob}`;
  return urlWithQueryParam;
};

export default generateURLWithQuery;
