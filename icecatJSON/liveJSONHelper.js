// User-level functions which understand the structure
// of Icecat Live response structure
//! use the response from jsonGetProductByID as input!

function getRootKeysByProductData(productData) {
  // for convenience, I skip the msg: OK if response is 200
  if (productData.msg !== "OK") {
    return "The product is not available";
  }
  productData = productData.data;

  // delete Dictionary and DemoAccount useless sections
  const rootKeys = Object.keys(productData);
  const usefulKeys = rootKeys.slice(1, -1);

  return usefulKeys;
}

export default {
  getRootKeysByProductData,
};
