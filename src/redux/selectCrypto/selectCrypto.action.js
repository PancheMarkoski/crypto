import selectCryptoTypes from "./selectCrypto.types";

export const selectCrypto = (crypto) => {
    return {
        type: selectCryptoTypes.SELECT_CRYPTO,
        payload: crypto,
    };
};