// src/reducers/clientReducer.jsx
const initialState = {
    user: {}, // Kullanıcı bilgilerini içeren nesne
    addressList: [], // Kullanıcının adres listesini içeren dizi
    creditCards: [], // Kullanıcının kredi kartları listesini içeren dizi
    roles: [], // Kullanıcının rollerini içeren dizi
    theme: "", // Kullanıcının temasını içeren string
    language: "", // Kullanıcının dilini içeren string
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload, // Kullanıcı bilgilerini güncelle
            };
        case "SET_ROLES":
            return {
                ...state,
                roles: action.payload, // Roller listesini güncelle
            };
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload, // Temayı güncelle
            };
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload, // Dili güncelle
            };
        default:
            return state; // Hiçbir aksiyon tanınmazsa mevcut durumu koru
    }
};

export default userReducer;
