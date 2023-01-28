import React, { Component } from "react";

class MovieList extends Component {
  state = {
    movies: [
      { id: "12345", title: "Avatar", year: "2009" },
      { id: "54321", title: "Back to the Future", year: "1985" },
      { id: "36423", title: "American Pie", year: "2005" },
    ],
  };

  render() {
    return (
      <div>
        <h1>{movie.title}</h1>
        <h4>{movie.year}</h4>
      </div>
    );
  }
}

export default MovieList;
