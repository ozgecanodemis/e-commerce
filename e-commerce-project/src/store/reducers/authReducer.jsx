// src/store/reducers/authReducer.jsx
import { LOGOUT_USER } from '../actions/authActions';

const initialState = {
    user: null,
    // other state properties...
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            return {
                ...state,
                user: null, // or reset other state properties as needed
            };
        // Handle other actions...
        default:
            return state;
    }
};

export default authReducer;
