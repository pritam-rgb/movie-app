// {
//     type:"ADD_MOVIES",
//     movies:[],
// }
// {
//     type:"REMOVE_MOVIES",
//     movies=[],
// }

export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';

export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}
export function addFavouriteMovie(movie){
    return{
        type:ADD_FAVOURITE,
        movie
    }
}