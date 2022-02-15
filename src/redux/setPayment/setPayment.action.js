import setPaymentTypes from "./setPayment.types";

export const setPayment = (payment) => {
    return {
        type: setPaymentTypes.SET_PAYMENT,
        payload: payment,
    };
};