import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE } from "../actions";
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export default function movie(state=initialMovieState,action){
    switch (action.type) {
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
            const filteredList=state.favourites.filter(
                (movie=>movie.Title!==action.movie.Title)
            );
            return{
                ...state,
                favourites:filteredList
            }

        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites:action.value
            }
    
        default:
            return state;
            
    }

}

