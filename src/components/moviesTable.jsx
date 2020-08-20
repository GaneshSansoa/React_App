import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/Table";
import Like from "./common/Like";
class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      lable: "Title",
      content: (movie) => (
        <Link
          to={{
            pathname: `/movies/${movie._id}`,
            query: { the: this.props.movies },
          }}
          params={{ movieData: this.props.movies }}
        >
          {movie.title}
        </Link>
      ),
    },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.handleLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.handleDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { tableClasses, movies, onSort, sortColumn } = this.props;

    return (
      <Table
        tableClasses={tableClasses}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
