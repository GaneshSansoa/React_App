import React from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../components/moviesTable";
import Pagination from "../components/pagination";
import Filters from "../components/filters";
import paginate from "../utils/paginate";
import _ from "lodash";
import { NavLink } from "react-router-dom";
class Vivdy extends React.Component {
  state = {
    count: "",
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Movies" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres,
    });
  }

  handleLike = (movie) => {
    console.log(movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies,
    });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  filterGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getGeneratedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { itemsCount: filtered.length, data: movies };
  };

  render() {
    let tableClasses = "";
    const { length: count } = this.state.movies;
    tableClasses += count > 0 ? "table" : "table d-none";
    const { pageSize, currentPage, genres, sortColumn } = this.state;

    const { itemsCount, data: movies } = this.getGeneratedData();
    return (
      <div>
        <h1 className="text-center mb-5">In Vivdy Project</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-3">
              <Filters
                items={genres}
                selectedItem={this.state.selectedGenre}
                onFilter={this.filterGenre}
              />
            </div>
            <div className="col-sm-8">
              <NavLink to="movies/new" movies={movies}>
                <button className="btn btn-primary"> New Movie</button>
              </NavLink>
              <p>
                There are{" "}
                {itemsCount > 0 ? " total " + itemsCount + " " : "No "}
                movies in this list
              </p>
              <MoviesTable
                tableClasses={tableClasses}
                movies={movies}
                handleLike={this.handleLike}
                handleDelete={this.handleDelete}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                pageSize={pageSize}
                itemCount={itemsCount}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
            <div className="col-sm-8"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vivdy;
