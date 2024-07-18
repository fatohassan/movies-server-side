const {Movies} = require("../models/movieModel")

const resolvers = {
    Query :{
        async movie(_, {ID}) {
            const movie = await Movies.findById(ID).lean()
            return {
                ...movie, id: movie._id
            }
        },
        async getMoviesList(_,) {
            const findMovie = await Movies.find().lean()
            return findMovie.map((movie) => {
                return {
                    ...movie, id: movie._id
                }
            })
        }
    },

    Mutation: {
        async createMovie(_, {movieInput: {original_title, overview, release_date, vote_average, backdrop_path, image}}) {
            const createMovie = new Movies ({
                  original_title, overview, release_date, vote_average, backdrop_path, image
            });
            const res = await createMovie.save();
            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteMovie(_, {ID}) {
            const wasDeleted = await Movies.deleteOne({_id:ID})
            return !!wasDeleted
        },
        async updateMovie(_, {ID, movieInput: {original_title, overview, release_date, vote_average, backdrop_path, image}}) {
            const updateMovie = await Movies.findOneAndUpdate(
                {_id:ID},
                {original_title, overview, release_date, vote_average, backdrop_path, image}, {new: true}
            );
            return updateMovie
        }
    }
}

module.exports = resolvers