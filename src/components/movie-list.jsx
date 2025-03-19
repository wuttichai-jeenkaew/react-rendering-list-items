import "../data/movies"
import movies from "../data/movies"
import MovieCard from "./movie-card"

function MovieList({
  title,
  year,
  runtime,
  image,
  genres,
  imdbRating,
  imdbVotes,
}) {
  return (
    <main className='flex justify-center py-12'>
      <div className='grid grid-cols-1 gap-8'>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={`${movie.title} - ${movie.year} - ${movie.director}`}
              title={movie.title}
              year={movie.year}
              runtime={movie.runtime}
              image={movie.image}
              genres={movie.genres}
              imdbRating={movie.imdbRating}
              imdbVotes={movie.imdbVotes}
            />
          )
        })}
      </div>
    </main>
  )
}

export default MovieList
