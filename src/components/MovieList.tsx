export default function MovieList( { omdbmovies } ){
    
    return (
        <ul>
            {omdbmovies.map(movie => {
                return <li key={movie.imdbID}>{movie.Title}</li>
            })}
        </ul>
    )
}