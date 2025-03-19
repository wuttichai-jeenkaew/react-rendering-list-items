function MovieCard({
  title,
  year,
  runtime,
  image,
  genres,
  imdbRating,
  imdbVotes,
}) {
  return (
    <div className='flex flex-row justify-center items-start pt-6 pb-8 px-4 gap-5 rounded-[10px] overflow-hidden shadow-lg bg-white'>
      <img className='w-[100px] h-[100px] rounded' src={image} alt={title} />
      <div className='flex flex-col gap-2'>
        <div>Title: {title}</div>
        <div>Year: {year}</div>
        <div>Runtime: {runtime}</div>
        <div className='flex flex-row gap-1'>
          Genres:{" "}
          {genres.map((genre, index) => (
            <span
              key={index}
              className='bg-[#EAAC99] rounded-[10px] p-1 text-[12px]'
            >
              {genre}
            </span>
          ))}
        </div>
        <div>IMDB Ratings: {imdbRating}</div>
        <div>IMDB Votes: {imdbVotes}</div>
      </div>
    </div>
  )
}

export default MovieCard
