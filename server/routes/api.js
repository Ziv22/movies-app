const express   = require("express")
const router    = express.Router()
const urllib    = require("urllib")    

const getUrl = searchText => {
    return  `http://www.omdbapi.com/?s=${searchText}}&plot=full&apikey=14b0dd81`
}

router.get("/movies/:movie", function(req,res){
    const movieName = encodeURIComponent(req.params.movie)
    const url = getUrl(movieName)

    urllib.request(url, function (err, data) {
        const modifiedData = JSON.parse(data)
        if(modifiedData.Response == "True"){
            res.send(modifiedData.Search)
        } else {
            res.send({err: "Movie Not Found"})
        }
    });
        
})

router.get("/sanity", function(req,res){
    res.send("ok")
})

module.exports = router 

