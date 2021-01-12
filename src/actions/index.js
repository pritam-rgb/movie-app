// {
//     type:"ADD_MOVIES",
//     movies:[],
// }
// {
//     type:"REMOVE_MOVIES",
//     movies=[],
// }

export const ADD_MOVIES='ADD_MOVIES';

export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}