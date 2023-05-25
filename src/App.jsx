import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import movies from "./data/movies";
import teams from "./data/teams";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {movies.map((movie, index) => (
          <div key={index}>
            <p>Title: {movie.title}</p>
            <p>year: {movie.year}</p>
            <p>runtime: {movie.runtime}</p>
            <p>director: {movie.director}</p>
            <img src={movie.image} alt={movie.title} />
            <ul>
              {movie.genres.map((genre, i) => (
                <li key={i}>{genre}</li>
              ))}
            </ul>
            <p>imdbRating: {movie.imdbRating}</p>
            <p>imdbVotes: {movie.imdbVotes}</p>
          </div>
        ))}
      </section>
      <section className="team-list-section">
        {teams.map((team, index) => (
          <div key={index}>
            <p>
              {team.name} Team ({team.id})
            </p>
            {team.children.map((child, index) => (
              <div key={index}>
                <p>
                  {child.name} Team ({child.id})
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
