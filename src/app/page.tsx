
import searchMovies from "@/lib/omdb";

export default async function Home() {

  const movies = await searchMovies("Harry Potter");
  console.log("Fetching Movies");

  return (
    <>
      <h1>Movie Search</h1>

      <ul>
        {movies.map(movie => {
        return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>

    </>
  );
}
