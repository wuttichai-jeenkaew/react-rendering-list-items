import "./App.css";
import movies from "./data/movies";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <div className="App">
      <section className="flex justify-center items-center bg-[#FDFBFB]">
        <div className="grid grid-cols-1 gap-20 p-6">
          <h1 className="text-[40px] font-semibold flex justify-center">
            Movie List Section
          </h1>
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              className="hover:shadow-2xl transition-shadow duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
