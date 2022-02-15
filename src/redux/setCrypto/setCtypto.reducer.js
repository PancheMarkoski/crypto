import setCryptoTypes from "./setCrypto.types";

const INITIAL_STATE = {
    getCryptos: []
}

const setCryptoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case setCryptoTypes.SET_CRYPTO:
            return {
                ...state,
                getCryptos: action.payload
            }
        default:
            return state;
    }
}

export default setCryptoReducer;