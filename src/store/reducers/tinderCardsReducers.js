import actionType from '../actionTypes';
export const tinderCardReducerInitials = {
   cards:[]
}

function tinderCardReducer(state = tinderCardReducerInitials, action) {
    
    switch (action.type) {

        case actionType.GET_TINDER_CARDS:
            
            return {
                ...state,
                cards:action.payload
            }
    
        default:
            return state
    }
}
export default tinderCardReducer;