import {
    SET_USER_FAILURE,
    SET_USER_REQUEST,
    SET_USER_SUCCESS,
} from "../actions/userActions";

export const FETCH_STATES = {
    NOT_FETCHED: "not fetched",
    FETCHING: "fetching",
    FETCHED: "fetched",
    FETCH_FAILED: "failed",
};

const initialState = {
    user: {}, // Kullanıcı bilgilerini içeren nesne
    addressList: [], // Kullanıcının adres listesini içeren dizi
    creditCards: [], // Kullanıcının kredi kartları listesini içeren dizi
    roles: [], // Kullanıcının rollerini içeren dizi
    theme: "", // Kullanıcının temasını içeren string
    language: "", // Kullanıcının dilini içeren string
    fetchState: FETCH_STATES.NOT_FETCHED, // Fetch durumu
    error: null, // Hata durumu
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_REQUEST:
            return {
                ...state,
                fetchState: FETCH_STATES.FETCHING, // Fetch işlemi başlatıldığında durumu güncelle
                error: null, // Hata bilgisini sıfırla
            };
        case SET_USER_SUCCESS:
            return {
                ...state,
                fetchState: FETCH_STATES.FETCHED, // Fetch işlemi başarılı olduğunda durumu güncelle
                user: action.payload.user, // Kullanıcı bilgilerini güncelle
                addressList: action.payload.addressList || [], // Adres listesini güncelle (varsayılan olarak boş dizi)
                creditCards: action.payload.creditCards || [], // Kredi kartları listesini güncelle (varsayılan olarak boş dizi)
                roles: action.payload.roles || [], // Roller listesini güncelle (varsayılan olarak boş dizi)
                theme: action.payload.theme || "", // Temayı güncelle (varsayılan olarak boş string)
                language: action.payload.language || "", // Dili güncelle (varsayılan olarak boş string)
                error: null, // Hata bilgisini sıfırla
            };
        case SET_USER_FAILURE:
            return {
                ...state,
                fetchState: FETCH_STATES.FETCH_FAILED, // Fetch işlemi başarısız olduğunda durumu güncelle
                error: action.payload, // Hata bilgisini güncelle
            };
        default:
            return state; // Hiçbir aksiyon tanınmazsa mevcut durumu koru
    }
};

export default userReducer;
