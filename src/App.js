import React from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./searchMovies";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie-Search App</h1>
        <h1>Made using themoviedb api</h1>
        <SearchMovies />
      </div>
    );
  }
}

export default App;
