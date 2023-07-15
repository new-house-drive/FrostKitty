
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import liveJSONFetcher from "./icecatJSON/liveJSONFetcher.js"; 
import favicon from 'serve-favicon'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()
const PORT = 3000

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
 
app.listen(PORT, () => {console.log("Proceed to PORT: " + PORT)})

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: __dirname + "/public"})
})


// console.log(await liveJSONFetcher.jsonGetProductByID('valera-shop', "11771947", "EN"))