import { cart_action_types } from "../actions_types";

export const toogleCartHidden = () => ({
    type: cart_action_types.TOOGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: cart_action_types.ADD_ITEM,
    payload: item
});