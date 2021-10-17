const express = require('express');
const router = express.Router();

const movieModel = require('./../models/movie.model.js')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
try{
    const allmovies = await movieModel.find();

    res.render('movies.hbs',{allmovies});
} catch(err){
    console.error(err);
}
})

router.get('/movies/:id' , (req , res , next) => {
    
        movieModel.findById(req.params.id)
        .then((movies) => res.render("moviesdetail.hbs", { movies }))
        .catch((err) => res.send("fatal error")); 
})

module.exports = router;
