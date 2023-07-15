
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import liveJSONFetcher from "./icecatJSON/liveJSONFetcher.js"; 


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express()
const PORT = 3000


app.listen(PORT, () => {console.log("Proceed to PORT: " + PORT)})

app.get('/', (req, res) => {
    res.sendFile("index.html", {root: __dirname})
})

console.log(await liveJSONFetcher.jsonGetProductByID('valera-shop', "11771947", "EN"))