import { cart_action_types } from "../actions_types";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cart_action_types.TOOGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden }
        default:
            return state;
    }
}

export default cartReducer;