import { user_action_types } from "../actions_types";

export const setCurrentUser = user => ({
    type: user_action_types.SET_CURRENT_USER,
    payload: user
});