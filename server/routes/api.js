const express   = require("express")
const router    = express.Router()
const urllib    = require("urllib")    

router.get("/movies/:movie", function(req,res){
    const movieName = req.params.movie
    const url = `http://www.omdbapi.com/?s=${movieName}}&apikey=14b0dd81`

    urllib.request(url, function (err, data) {       
        res.send(JSON.parse(data).Search)
    });
        
})

router.get("/sanity", function(req,res){
    res.send("ok")
})

module.exports = router 

