import { cart_action_types } from "../actions_types";

export const toogleCartHidden = () => ({
    type: cart_action_types.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cart_action_types.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cart_action_types.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: cart_action_types.REMOVE_ITEM,
    payload: item
});