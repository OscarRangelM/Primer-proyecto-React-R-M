export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE"

export function addFavorite(personaje) {
    return {
        type: ADD_FAVORITE,
        payload: personaje,
    }
}

export function deleteFavorite(id){
    return{
        type: DELETE_FAVORITE,
        payload: id,
    }
}