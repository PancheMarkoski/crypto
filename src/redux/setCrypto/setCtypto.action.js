import setCryptoTypes from "./setCrypto.types";

export const setCrypto = (crypto) => {
    return {
        type: setCryptoTypes.SET_CRYPTO,
        payload: crypto,
    };
};