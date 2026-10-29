import MovieCard from "./MovieCard";

export default function MovieList( { omdbmovies } ){
    
    return (
        <ul>
            {omdbmovies.map(movie => {
                return <MovieCard key={movie.imdbID} movie={movie}/>
            })}
        </ul>
    )
}