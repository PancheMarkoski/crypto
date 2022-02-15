import React from 'react';
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom";

import Heading from "../components/Heading"
import Paragraph from "../components/Paragraph"
import SelectCryptoCurrency from '../screens/SelectCryptoCurrency/SelectCryptoCurrency';
import SelectPromo from '../screens/SelectPromo/SelectPromo';
import PaymentAddress from '../screens/PaymentAddress/PaymentAddress';
import TransactionPending from '../screens/TransactionPending/TransactionPending';
import PaymentSuccessful from '../screens/PaymentSuccessful/PaymentSuccessful';

const mapState = ({ selectCrypto }) => ({
    selectCrypto: selectCrypto.selectCrypto
})

export default function LeftSection() {
    const { selectCrypto } = useSelector(mapState)

    return (
        <div className='leftSection'>
            <Heading
                title="Pay with Crypto"
                margin="50px 0 0 50px"
            />
            <Paragraph margin="10px 0 20px 50px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
            <Routes>
                <Route path="/" element={<SelectCryptoCurrency />} />
                {selectCrypto && <Route path='/promo' element={<SelectPromo />} />}
                <Route path="/payment" element={<PaymentAddress />} />
                <Route path="/pending" element={<TransactionPending />} />
                <Route path="/successful" element={<PaymentSuccessful />} />
            </Routes>
        </div>
    );
}
