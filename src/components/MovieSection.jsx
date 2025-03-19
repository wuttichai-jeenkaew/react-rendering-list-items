import movies from "../data/movies";

function MovieSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-gray-50">
      <h1 className="text-center text-4xl py-6 font-semibold">Movie List Section</h1>
      {movies.map((m) => {
        return (
          <div
            key={m.id}
            className="flex flex-row justify-center gap-8 px-4 py-8 w-[450px] h-[250px] shadow-xl rounded-lg bg-[#FFFFFF]"
          >
            <img
              className="w-[102px] h-[100px] object-cover rounded-md"
              src={m.image}
              alt="Movie Image"
            />
            <div className="w-[300px] text-[18px] font-semibold">
              <ol>Title: {m.title}</ol>
              <ol>Year: {m.year}</ol>
              <ol>Runtime: {m.runtime}</ol>
              <div className="flex flex-row gap-2 mt-2">
                <ol>Genres: </ol>
                {m.genres.map((genre, index) => (
                  <span
                    key={index}
                    className="bg-red-300  px-2 py-1 rounded-xl text-sm font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <ol>IMDB Ratings: {m.imdbRating}</ol>
              <ol>IMDB Votes: {m.imdbVotes}</ol>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieSection;
