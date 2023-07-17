const getJSONButton = document.querySelector(".get-json-button")


getJSONButton.onclick = () => {
    const inputShopname = document.getElementById("input-shopname").value
    const inputIcecatID = document.getElementById("input-icecat-id").value
    let url = constructJSONLink(inputShopname, inputIcecatID, "EN")
    window.open(url, '_blank') 
};

function constructJSONLink(shopname, icecat_id, lang) {
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