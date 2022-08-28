const { Router } = require("express");
const router = Router();

const connection = require("../db/database");
const fetchReddit = require("../services/fetchReddit");



router.get("/api/v1/subreddits", (req, res) => {
  
    connection
    .promise()
    .query("SELECT * FROM `Subreddits`")
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.log(err);
    });
  
});

router.get("/insert", async (req, res) => {

    const info = await fetchReddit();


  connection
    .promise()
    .query(
      "INSERT INTO `Subreddits`(id, title, subscribers, public_description, header_img, restrict_commenting) VALUES ?",
      [info]
    ),
    (error) => {
        if (error) return res.json({ error: error });
   
    };

    res.status(200)
});


module.exports = router;
