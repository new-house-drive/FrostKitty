import liveJSONFetcher from "./icecatJSON/liveJSONFetcher.js";
import liveJSONHelper from "./icecatJSON/liveJSONHelper.js";

const product = await liveJSONFetcher.jsonGetProductByID("openicecat-live", 56195846, "EN");
const usefulKeys = liveJSONHelper.getRootKeysByProductData(product)

console.log(usefulKeys)