import fetch from "node-fetch";


// skeleton of creating a link by IcecatID
//TODO: add options to use MPN & Brand or GTIN
//TODO: add optional parameters

function jsonCreateLink(shopname, icecat_id, lang) {
  const DOMAIN = `https://live.icecat.biz/api?` 
  
  
  let url =
    DOMAIN +
    `shopname=${shopname}` +
    `&lang=${lang}` +
    `&icecat_id=${icecat_id}` +
    `&content=`;
  console.log("Your link is: " + url)
  return url;

}

// get JSON for single product.
async function fetchProduct(url) {
  const response = await fetch(url);
  const productData = await response.json();
  return productData;
}

// Customer level function
async function jsonGetProductByID(shopname, icecat_id, lang) {
  const url = jsonCreateLink(shopname, icecat_id, lang);
  let product = await fetchProduct(url);
  return product;
}

export default {
  jsonCreateLink,
  fetchProduct,
  jsonGetProductByID
};
