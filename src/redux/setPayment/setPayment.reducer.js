import setPaymentTypes from "./setPayment.types";

const INITIAL_STATE = {
    payment: null
}

const setPaymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case setPaymentTypes.SET_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
        default:
            return state;
    }
}

export default setPaymentReducer;