const mongoose = require("mongoose");

// creating a model for Movies
const movieSchema = new mongoose.Schema({
  // index ''DOne'
  adult: Boolean,
  backdrop_path: {
    type: String,
    require: true,
  },
  genre_ids: [],
  id: {
    type: Number,
    unique: true,
  },
  original_language: {
    type: String,
  },
  original_title: {
    type: String,
  },
  overview: {
    type: String,
  },
  popularity: Number,
  poster_path: {
    type: String,
  },
  release_date: {
    type: String,
  },
  title: {
    type: String,
  },
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
});

const Movie = new mongoose.model("Movie", movieSchema);

//
const movie_1 = new Movie({
  adult: false,
  backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
  genre_ids: [878, 12, 28],
  id: 653346,
  original_language: "en",
  original_title: "Kingdom of the Planet of the Apes",
  overview:
    "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
  popularity: 6245.898,
  poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  release_date: "2024-05-08",
  title: "Kingdom of the Planet of the Apes",
  video: false,
  vote_average: 6.89,
  vote_count: 854,
});

movie_1.save();

const movie_2 = new Movie({
  adult: false,
  backdrop_path: "/z121dSTR7PY9KxKuvwiIFSYW8cf.jpg",
  genre_ids: [10752, 28, 18],
  id: 929590,
  original_language: "en",
  original_title: "Civil War",
  overview:
    "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
  popularity: 2730.901,
  poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
  release_date: "2024-04-10",
  title: "Civil War",
  video: false,
  vote_average: 7.062,
  vote_count: 1389,
});

movie_2.save();

const movie_3 = new Movie({
  adult: false,
  backdrop_path: "/xRd1eJIDe7JHO5u4gtEYwGn5wtf.jpg",
  genre_ids: [878, 28, 12],
  id: 823464,
  original_language: "en",
  original_title: "Godzilla x Kong: The New Empire",
  overview:
    "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
  popularity: 2726.153,
  poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  release_date: "2024-03-27",
  title: "Godzilla x Kong: The New Empire",
  video: false,
  vote_average: 7.229,
  vote_count: 2602,
});

movie_3.save();

const movie_4 = new Movie({
  adult: false,
  backdrop_path: "/oavbmL3iddJUmC8nQjL6bLHwAP4.jpg",
  genre_ids: [27, 53],
  id: 719221,
  original_language: "en",
  original_title: "Tarot",
  overview:
    "When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. One by one, they come face to face with fate and end up in a race against death.",
  popularity: 2349.378,
  poster_path: "/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
  release_date: "2024-05-01",
  title: "Tarot",
  video: false,
  vote_average: 6.549,
  vote_count: 387,
});

movie_4.save();

module.exports = mongoose.model("Movies", movieSchema);
