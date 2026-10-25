import "server-only"; 

export default async function searchMovies (searchTerm: string) {

    const term = searchTerm.trim().slice(0, 100);

    if(!term) {
        return [];
    }

    const apiKey = process.env.OMDB_API_KEY;
    
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(term)}`;

    const res = await fetch(url);
    if(!res.ok) {
        throw new Error("The data has not been retrieved")
    }

    const data = await res.json();

    return data.Search || [];
}