const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/wine-routes");

const app = express();

// middlewares
app.use(express.json());
app.use("/wines", router);// localhost:3000/wines

mongoose.connect(
    "mongodb+srv://admin:torCtrvegObXULYi@cluster0.dwnwkew.mongodb.net/wine-index?retryWrites=true&w=majority"
    ).then(() => console.log("DataBase Connected!"))
    .then(() => {
        app.listen(3000);
    }).catch((err)=>console.log(err));

// password: torCtrvegObXULYi