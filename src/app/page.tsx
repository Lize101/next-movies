
import MovieList from "@/components/MovieList";
import searchMovies from "@/lib/omdb";

export default async function Home() {

  const movies = await searchMovies("Harry Potter");

  return (
    <>
      <h1>Movie Search</h1>
      <MovieList omdbmovies={movies}/>
    </>
  );
}
