import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

import CryptoInfo from '../../components/CryptoInfo'
import ItemSelect from '../../components/Select/ItemSelect'
import Heading from "../../components/Heading"
import { SiBitcoin } from 'react-icons/si';
import CopyPaymentAddress from '../../components/CopyPaymentAddress'
import Btn from "../../components/Btn"


const mapState = ({ selectCrypto, promo }) => ({
    selectCrypto: selectCrypto.selectCrypto,
    promo: promo.promo,
    selectedPromo: promo.selectPromo

})

export default function PaymentAddress() {
    const { selectCrypto, selectedPromo } = useSelector(mapState)

    return (
        <Fragment>
            <CryptoInfo SiBitcoin={SiBitcoin} backPath="/">
                Crypto currency
            </CryptoInfo>
            <CryptoInfo backPath="/">
                {selectCrypto.asset_id}
            </CryptoInfo>
            <CryptoInfo backPath="/promo">
                {selectedPromo && selectedPromo.name}
            </CryptoInfo>
            <Heading
                title="Total"
                margin="29px 0 19px 50px"
                fontSize='17px'
            />
            <ItemSelect selected={false} crypto={selectCrypto} />
            <Heading
                title="Send your payment to"
                margin="39px 0 15px 50px"
                fontSize='17px'
            />
            <CopyPaymentAddress />
            <Link to="/pending"><Btn /></Link>
        </Fragment>
    )
}
