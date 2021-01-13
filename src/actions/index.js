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
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE';

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

export function removeFromFavourite(movie){
    return{
        type:REMOVE_FROM_FAVOURITE,
        movie
    }
}