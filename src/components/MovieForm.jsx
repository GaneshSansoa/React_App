import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovies, getMovie, saveMovie } from "../services/fakeMovieService";
class MovieForm extends Form {
  state = {
    data: {
      _id: 0,
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genre: [],
    errors: {},
  };
  componentDidMount() {
    console.log(this.props);
    if (this.props.movieData) {
      console.log(this.props.movieData);
      const movieData = this.props.movieData;
      movieData.genreId = movieData.genre._id;
      this.setState({
        data: movieData,
      });
    } else {
      console.log("none");
    }
  }
  generateId = function () {
    // Do not use this as a real random integer generation method. Only for example purposes.
    return Math.floor(Math.random() * 100);
  };
  generateData = function () {
    return new Date();
  };
  genre_schema = Joi.object().keys({
    _id: Joi.string().required().label("Genre"),
    name: Joi.string(),
  });
  schema = {
    title: Joi.string().required().label("Title"),
    numberInStock: Joi.number().required().label("Stock"),
    dailyRentalRate: Joi.number().required().label("Rate").min(0).max(5.0),
    genreId: Joi.string().required(),
  };
  doSubmit = () => {
    console.log("Submit");
    console.log(this.props.movies);
    console.log(this.state);

    const movie = {
      genreId: this.state.data.genre_id,
      numberInStock: this.state.data.numberInStock,
      dailyRentalRate: this.state.data.dailyRentalRate,
      title: this.state.data.title,
    };
    const movies = saveMovie(this.state.data);
    console.log(movies);
    console.log(getMovies());
  };
  render() {
    const genres = getGenres();
    console.log("Generated Data");

    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("title", "Title")}
                <div className="form-group">
                  <label htmlFor="genreId">Genre</label>
                  <select
                    onChange={this.handleChange}
                    name="genreId"
                    id="genreId"
                    className="form-control"
                    value={this.state.data.genreId}
                  >
                    <option key={0} value="">
                      Select Genre
                    </option>
                    {genres.map((genre) => {
                      console.log(this.state.data.genreId == genre._id);
                      return (
                        <option key={genre._id} value={genre._id}>
                          {genre.name}
                        </option>
                      );
                    })}
                  </select>
                  {this.state.errors.genreId && (
                    <div className="alert alert-danger">
                      {this.state.errors.genreId}
                    </div>
                  )}
                </div>
                {this.renderInput("numberInStock", "Number in Stock")}
                {this.renderInput("dailyRentalRate", "Rate")}
                {this.renderButton("Create Movie")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieForm;
