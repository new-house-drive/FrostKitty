import fetch from "node-fetch";

function createJSONLink(shopname, icecat_id, lang) {
  let liveJSON =
    `https://live.icecat.biz/api?` +
    `shopname=${shopname}` +
    `&lang=${lang}` +
    `&icecat_id=${icecat_id}` +
    `&content=`;
  return liveJSON;
}

async function getJSONProductData(shopname, icecat_id, lang) {
  const JSONLink = createJSONLink(shopname, icecat_id, lang);
  const response = await fetch(JSONLink);
  const JSONData = await response.json();

  return JSONData;
}

export default {
        createJSONLink,
        getJSONProductData
}