const {Router} = require("express");
const router = Router();

const con  = require("../db/database");


router.get("/", (req, res) => {

    res.send("<h1> Prueba técnica Reddit </h1>")
})


router.get('/subreddits', (req, res) =>{    

    con.promise().query("SELECT * FROM `Subreddits`")
    .then( ([rows]) => {
        
        res.status(200).json(rows);

    })
    .catch((err) =>{
        console.log()
    })
    .then( () => con.end()); 

})

module.exports = router