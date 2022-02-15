import promoTypes from "./promo.types";

export const selectPromo = (promo, amount) => {
    return {
        type: promoTypes.PROMO,
        payload: promo,
        amountPayload: amount
    };
};