const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path: './config.env'});


require("./conn");

app.use(express.json());
app.use(require("./auth/auth"));


const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Port is listening at ${port}`);
})