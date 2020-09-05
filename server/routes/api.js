const express   = require("express")
const router    = express.Router()
const urllib    = require("urllib")    

router.get("/movies/:movie", function(req,res){
    const movieName = encodeURIComponent(req.params.movie)
    const url = `http://www.omdbapi.com/?s=${movieName}}&plot=full&apikey=14b0dd81`

    urllib.request(url, function (err, data) {       
        const modifiedData = JSON.parse(data).Search
        res.send(modifiedData)
    });
        
})

router.get("/sanity", function(req,res){
    res.send("ok")
})

module.exports = router 

