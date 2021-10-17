const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchma = new Schema({
    title:String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtime:[String],
});

const movieModel = mongoose.model("movies", movieSchma);
module.exports = movieModel;

