import liveJSONHelper from "./icecatJSON/liveJSONHelper.js";
const data = await liveJSONHelper.createJSONLink("openicecat-live", 56195846, "EN");
console.log(data);
