export function MovieCard({ movie, className }) {
  return (
    <div
      className={`flex items-start bg-white text-[#181818] border border-white p-4 sm:p-4 rounded-xl shadow-lg shadow-[#917C7C40] w-full sm:w-[450px] md:w-[450px] transition-transform hover:scale-105 ${className}`}
    >
      {/* Movie Image */}
      <img
        className="w-21 h-20 sm:w-[102px] sm:h-[100px] rounded-[10px] object-cover mr-4"
        src={movie.image}
        alt={movie.title}
      />

      {/* Movie Details */}
      <div className="flex flex-col text-left text-lg gap-2">
        <h2>Title: {movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Runtime: {movie.runtime} Mins</p>

        {/* Genres */}
        <div className="flex flex-wrap items-center text-lg">
          <div className="flex flex-wrap gap-2">
            <p>Genres:</p>
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="bg-[#EAAC99] text-[#181818] text-base px-2 py-1 rounded-[10px]"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <p>IMDB Ratings: {movie.imdbRating ?? "N/A"}</p>
        <p>IMDB Votes: {movie.imdbVotes ?? "N/A"}</p>
      </div>
    </div>
  );
}
