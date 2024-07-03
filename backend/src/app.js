import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const app = express()
app.use(router);
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})