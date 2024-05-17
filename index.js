const express = require('express');
const app = express();
const router = require("./routes/router");
const db = require("./config/db");
const port = 8005;


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/images",express.static("images"));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server started ${port}`);
});