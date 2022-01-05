import { authConstants } from "./actionTypes.js";

export const loginUser = () => ({
    type: authConstants.LOGIN_USER
});

export const logoutUser = () => ({
    type: authConstants.LOGOUT_USER
});