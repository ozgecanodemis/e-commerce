// src/store/actions/clientActions.js
import { setRoles } from "../reducers/clientReducer";

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
    const { roles } = getState().client;
    if (roles.length === 0) {
        try {
            // API isteği burada yapılır (örnek URL)
            const response = await fetch("/api/roles");
            const data = await response.json();
            dispatch(setRoles(data));
        } catch (error) {
            console.error("Roller alınırken hata oluştu:", error);
        }
    }
};
