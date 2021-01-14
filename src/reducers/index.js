import {combineReducers} from 'redux';
import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITE } from "../actions";
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialMovieState,action){
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
const initialSearchState={
    result:{}
    
};
export function search(state=initialSearchState,action){
    return state
};
// const initialRootState={
//     movies:initialMovieState,
//     search:initialSearchState
// };
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers({
    movies,
    search
});
