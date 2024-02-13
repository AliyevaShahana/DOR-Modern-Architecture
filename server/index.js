const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/productRoute");
const routerSign = require("./routes/signRouter");

const PORT = 8080;
const DB_URL = "mongodb+srv://shahana:shahana7@cluster0.td6cyoq.mongodb.net/";

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/products", router);
app.use("/sign", routerSign);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected  to db succesfully!");
    app.listen(PORT, () => {
      console.log(`Example app listening on port: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
