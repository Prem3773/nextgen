const  mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        moviename: String,
        hero: String,
        heroine: String,
        year: Number,
        rating: Number,
        genre : String
    }
);


const movies = mongoose.model('Moviedata', movieSchema);
module.exports = movies;