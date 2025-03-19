import "./App.css"
import MovieList from "../src/components/movie-list"

function App() {
  return (
    <div className='bg-[#FDFBFB]'>
      <h1 className='text-4xl text-center pt-12'>Movie List Section</h1>
      <section>
        {/* Render Movie Lists Here */}
        <MovieList />
      </section>
    </div>
  )
}

export default App
