import React, { Component } from "react";
import MovieForm from "./MovieForm";
import NotFound from "../pages/NotFound";
import { getMovies, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
class MovieDetails extends Component {
  state = {
    movie_data: {},
  };
  handleClick = () => {
    this.props.history.push("/movies");
  };
  componentWillMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      const movie_data = this.props.movieData.filter(
        (m) => m._id === this.props.match.params.id
      );
      if (movie_data != undefined) {
        console.log(movie_data);
        this.setState({ movie_data: movie_data });
        console.log(this.state);
      }
    } else {
    }
  }
  render() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        {getMovie(this.props.match.params.id) ? (
          <MovieForm movieData={this.state.movie_data} genre="sda" />
        ) : (
          <NotFound />
        )}
      </React.Fragment>
    );
  }
}

export default MovieDetails;
