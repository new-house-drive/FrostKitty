
import fetch from "node-fetch";

const shopname = "openicecat-live"
const icecat_id = "56195846"
const lang = "EN"
let liveJSON = `https://live.icecat.biz/api?` +
        `shopname=${shopname}`+
        `&lang=${lang}`+
        `&icecat_id=${icecat_id}`+
        `&content=`

const response = await fetch(liveJSON)
const data = await response.json()

console.log(data)