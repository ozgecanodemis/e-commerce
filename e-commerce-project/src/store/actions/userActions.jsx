import { SET_LANGUAGE, SET_ROLES, SET_THEME, SET_USER } from "../reducers/userReducer";

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});
export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles
});
export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme
});
export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language
});