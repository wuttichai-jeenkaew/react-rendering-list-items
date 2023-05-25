import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import movies from "./data/movies";
import teams from "./data/teams";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
      </section>
      <section className="team-list-section">
        {/* Render Team List Here */}
      </section>
    </div>
  );
}

export default App;
