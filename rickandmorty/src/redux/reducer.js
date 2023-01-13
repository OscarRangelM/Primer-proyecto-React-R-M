import { ADD_FAVORITE, DELETE_FAVORITE } from './actions';

const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            let nuevoFav = [...state.myFavorites, action.payload];
            return {
                ...state,
                myFavorites: nuevoFav,
            };
        case DELETE_FAVORITE:
            let antiguoFav = state.myFavorites.filter((personaje) => personaje.id !== action.payload)
            return{
                ...state,
                myFavorites: antiguoFav,
            }
    
        default:
            return state;
    }
}

export default rootReducer;
