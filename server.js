//* 1. Fetch the XML data from the the link.
// import fetch from "node-fetch"

// const response = await fetch('https://data.icecat.biz/export/freexml/refs/FeaturesList.xml.gz')

//* 2. Decompress the .gz format
// zlib?? NOT REQUIRED FOR JSON and pure xml
//* 3. Transform .XML -> JS object.


// var convert = require('xml-js');
// var xml =
// '<?xml version="1.0" encoding="utf-8"?>' +
// '<note importance="high" logged="true">' +
// '    <title>Happy</title>' +
// '    <todo>Work</todo>' +
// '    <todo>Play</todo>' +
// '</note>';
// var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
// var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
// console.log(result1, '\n', result2);