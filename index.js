const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express();


app.get("/", (req, res) => {   

    res.send("<h1> Prueba técnica Reddit </h1>")
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors())


app.listen(process.env.PORT || 5000, () =>{
    console.log("servidor corriendo " );

})

