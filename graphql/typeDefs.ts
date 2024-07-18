const typeDefs = `
    type Movies {
    id: String
    original_title: String!
    release_date: String!
    vote_average: String
    backdrop_path: String
    image: String
    overview: String!

}

type Query {
    movie(ID: String!): Movies!
    getMoviesList: [Movies!]!
}

type Mutation {
    createMovie(movieInput: MovieInput): Movies!
    updateMovie(ID: String!, movieInput: MovieInput): Movies!
    deleteMovie(ID: String): Boolean!
}

input MovieInput {
    original_title: String!
    release_date: String
    vote_average: String
    backdrop_path: String
    image: String
    overview: String
}
`

module.exports = typeDefs