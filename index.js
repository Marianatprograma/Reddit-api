const express = require("express");
const cors = require('cors');
require('dotenv').config();
require("./db/database");

const app = express();

const subredditsRoutes = require("./routes/subreddit.js")


app.use(subredditsRoutes)

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors())


app.listen(process.env.PORT || 5000, () =>{
    console.log("servidor corriendo " );

})

