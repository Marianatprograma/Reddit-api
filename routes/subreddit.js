const {Router} = require("express");
const router = Router();


router.get("/", (req, res) => {

    res.send("<h1> Prueba técnica Reddit </h1>")
})


router.get('/subreddits', (req, res) =>{    

     res.send('servir datos')

})

module.exports = router