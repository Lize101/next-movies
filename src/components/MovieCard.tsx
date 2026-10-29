export default function MovieCard( { movie } ) {

    return (

        <li>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title}/>
            <p>{movie.Year}</p>
        </li>

    )
}