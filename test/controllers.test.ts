import { describe, expect, it, jest } from "@jest/globals";
import { Movies } from "../models/movieModel";
import mongoose from "mongoose";
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const mockObjId = new mongoose.Types.ObjectId

jest.mock("../models/movieModel");

const createMoviesWithItems = {
  _id: mockObjId,
  "original_title": "Inside Out 2",
  overview:
    "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected",
  release_date: "2024-06-11",
  vote_average: 7.761,
};

const req = {
  body: {
    "original_title": "Inside Out 2",
    overview:
      "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected",
    release_date: "2024-06-11",
    vote_average: 7.761,
    image: 'Not null',
    backdrop_path: 'Not null',
  },
  params: { id: mockObjId },
};

const res = {
  status: jest.fn((x) => x),
  json: jest.fn((x) => x),
};

describe("GET movies", () => {
  it("should send a status of 200 when getting movies", async () => {
    Movies.find.mockResolvedValueOnce([createMoviesWithItems])
    await getMovies(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([createMoviesWithItems]);
  });
  it("should send a status of 404 when getting movies", async () => {
    Movies.find()
    await getMovies(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe("GET movie", () => {
    it("should send a status of 200 when get a movie", async () => {
      Movies.findById.mockResolvedValueOnce(createMoviesWithItems)
      await getMovie(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(createMoviesWithItems)
    });
  it("should send a status of 404 if no movie found", async () => {
    Movies.findById.mockResolvedValueOnce({
      _id: '1',
      "original_title": "Inside Out 2",
      overview:
        "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected",
      release_date: "2024-06-11",
      vote_average: 7.761,
      image: 'Not null',
      backdrop_path: 'Not null'
    });
    await getMovie(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith("Invalid id for a movie");
  });
});

describe("POST movie", () => {
  it("should return status of 200 when movie is created", async () => {
    const {
        original_title,
        overview,
        release_date,
        vote_average,
        backdrop_path,
        image,
      } = req.body;
    Movies.create.mockResolvedValueOnce({
        original_title,
        overview,
        release_date,
        vote_average,
        backdrop_path,
        image,
        _id: mockObjId
      });
    await createMovie(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
        _id: mockObjId,
        "original_title": "Inside Out 2",
        overview:
          "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected",
        release_date: "2024-06-11",
        vote_average: 7.761,
        image: 'Not null',
        backdrop_path: 'Not null'
      })
  });
  it("should return status of 400 when movie fail to be created", async () => {
    const {
        // original_title,
        overview,
        release_date,
        vote_average,
        backdrop_path,
        image,
      } = req.body;
    Movies.create.mockResolvedValueOnce({
        // original_title,
        overview,
        release_date,
        vote_average,
        backdrop_path,
        image,
        _id: mockObjId
      });
    await createMovie(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith('All fields are required')
  });
});

describe('PUT movie', () => {
    it('should return a status of 201 if movie updated', async () => {
        Movies.findOneAndUpdate.mockResolvedValueOnce({_id: req.params.id}, req.body);
        await updateMovie(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            _id: mockObjId,
            "original_title": "Inside Out 2",
            overview:
              "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected",
            release_date: "2024-06-11",
            vote_average: 7.761,
            image: 'Not null',
            backdrop_path: 'Not null'
          })
    });
    it('should return a status of 400 if movie fail to update', async () => {
        Movies.findOneAndUpdate.mockResolvedValueOnce({_id: req.params['123']}, req.body);
        await updateMovie(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith("Invalid id")
    });
});

describe('DELETE movie', () => {
    it('it should return a status of 200 when movie is deleted', async () => {
        Movies.deleteOne.mockResolvedValueOnce({_id: req.params.id});
        await deleteMovie(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith('True')
    });
    it('it should return a status of 400 when movie fail to delete', async () => {
        Movies.deleteOne.mockResolvedValueOnce({_id: req.params['123']});
        await deleteMovie(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith("Invalid id")
    });
})
