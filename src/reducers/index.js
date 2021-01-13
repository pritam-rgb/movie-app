import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FROM_FAVOURITE } from "../actions";
const initialMovieState={
    list:[],
    favourites:[]
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
    
        default:
            return state;
            
    }

}

