import fetch from "node-fetch";

// skeleton of creating a link by IcecatID
//TODO: add options to use MPN & Brand or GTIN

function _jsonCreateLink(shopname, icecat_id, lang) {
  let url =
    `https://live.icecat.biz/api?` +
    `shopname=${shopname}` +
    `&lang=${lang}` +
    `&icecat_id=${icecat_id}` +
    `&content=`;
  return url;
}

// get JSON for single product.
async function _fetchProduct(url) {
  const response = await fetch(url);
  const productData = await response.json();
  return productData;
}

// Customer level function
async function jsonGetProductByID(shopname, icecat_id, lang) {
  const url = _jsonCreateLink(shopname, icecat_id, lang);
  let product = await _fetchProduct(url);
  return product;
}

export default {
  jsonGetProductByID
};
