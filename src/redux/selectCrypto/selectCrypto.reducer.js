import selectCryptoTypes from "./selectCrypto.types";

const INITIAL_STATE = {
    selectCrypto: null
}

const selectCryptoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case selectCryptoTypes.SELECT_CRYPTO:
            return {
                ...state,
                selectCrypto: action.payload
            }
        default:
            return state;
    }
}

export default selectCryptoReducer;