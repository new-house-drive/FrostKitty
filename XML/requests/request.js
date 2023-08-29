function reqListener() {
    console.log(this.responseText);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://data.icecat.biz/xml_s3/xml_server3.cgi?lang=DE&ean_upc=638060338353&output=productxml");
  req.send();

  