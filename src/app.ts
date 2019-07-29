import express from "express";
import bodyParser from "body-parser";

const influencer = require("./routes/influencer");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/", influencer);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Server started on port 3000"));