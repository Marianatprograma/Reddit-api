const express = require("express");
const cors = require('cors');
require('dotenv').config();
require("./db/database");

const subredditsRoutes = require("./routes/subreddit.js")

const app = express();
app.use(cors());

// var corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200, // For legacy browser support
//     methods: "GET, PUT"
// }

// app.use(cors(corsOptions));

app.use(subredditsRoutes)

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.listen(process.env.PORT || 5000, () =>{
    console.log("servidor corriendo " );

})

