import appConfigObject from "../../app.config";

const getPosterURL = (URIblob) => {
  const { posterCDNBlob } = appConfigObject;
  return `${posterCDNBlob}${URIblob}`;
};

export default getPosterURL;
