import promoTypes from "./promo.types"

const INITIAL_STATE = {
    promo: [
        { id: 1, name: "FREE SHIPPING" },
        { id: 2, name: "10% OFF NEXT ORDER" }
    ],
    selectPromo: null
}

const promoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case promoTypes.PROMO:
            return {
                ...state,
                selectPromo: action.payload
            }
        default:
            return state;
    }
}

export default promoReducer;