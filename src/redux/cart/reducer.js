import { cart_action_types } from "../actions_types";
import { addItemToCart } from './utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cart_action_types.TOOGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden }
        case cart_action_types.ADD_ITEM:
            return { 
                ...state, cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;