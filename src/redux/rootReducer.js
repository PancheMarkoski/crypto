import { combineReducers } from 'redux'

import setCryptoReducer from './setCrypto/setCtypto.reducer';
import selectCryptoReducer from "./selectCrypto/selectCrypto.reducer";
import promoReducer from './setPromo/promo.reducer';
import setPaymentReducer from './setPayment/setPayment.reducer';

export default combineReducers({
    crypto: setCryptoReducer,
    selectCrypto: selectCryptoReducer,
    promo: promoReducer,
    payment: setPaymentReducer
});