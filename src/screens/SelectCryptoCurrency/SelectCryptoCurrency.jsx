import React, { Fragment } from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import CryptoInfo from '../../components/CryptoInfo';
import CryptoSelect from '../../components/Select/CryptoSelect';
import ItemSelect from '../../components/Select/ItemSelect';
import Btn from '../../components/Btn';
import Heading from "../../components/Heading"
import { SiBitcoin } from 'react-icons/si';

const mapState = ({ selectCrypto, crypto }) => ({
    selectCrypto: selectCrypto.selectCrypto,
    cryptos: crypto.getCryptos
})

export default function SelectCryptoCurrency() {
    const { selectCrypto, cryptos } = useSelector(mapState)

    return (
        <Fragment>
            <CryptoInfo SiBitcoin={SiBitcoin} backPath="/">
                Crypto currency
            </CryptoInfo>
            <Heading
                title="Select your crypto currency"
                margin="39px 0 0 50px"
                fontSize='17px'
            />
            <CryptoSelect cryptos={cryptos} />
            <Heading
                title="Total"
                margin="29px 0 19px 50px"
                fontSize='17px'
            />
            <ItemSelect selected={false} crypto={selectCrypto} />
            <Link to="/promo"><Btn /></Link>
        </Fragment>
    )
}
