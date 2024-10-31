

import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({


    product: productReducer,
    shopping: shoppingCartReducer,
    user: userReducer,

});

export default reducers;