import React, { Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios"

import CryptoInfo from '../../components/CryptoInfo'
import ItemSelect from '../../components/Select/ItemSelect'
import Heading from "../../components/Heading"
import { SiBitcoin } from 'react-icons/si';
import Promo from '../../components/Select/Promo'
import { setPayment } from "../../redux/setPayment/setPayment.action"


const mapState = ({ selectCrypto, promo }) => ({
    selectCrypto: selectCrypto.selectCrypto,
    promo: promo.promo,
    promoSelected: promo.selectPromo
})

export default function SelectPromo() {
    const navigate = useNavigate();
    const { selectCrypto, promo, promoSelected } = useSelector(mapState)
    const dispatch = useDispatch()


    let amount = 100;
    if (promoSelected && promoSelected.id === 2) {
        let percentage = (amount * 10) / 100
        amount = amount - percentage
    }

    const handlePayment = async (e) => {
        e.preventDefault()

        const res = await axios.post("https://api.nowpayments.io/v1/payment", {
            "price_amount": amount,
            "price_currency": "usd",
            "pay_currency": selectCrypto.asset_id.toLowerCase(),
            "ipn_callback_url": "https://nowpayments.io",
        }, {
            headers: {
                'x-api-key': '8PTDYRF-SHM4T4H-NZZ9KSN-X7ZK23A',
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
        dispatch(setPayment(res.data))
        navigate("/payment");

    }

    return (
        <Fragment>
            <CryptoInfo SiBitcoin={SiBitcoin} backPath="/">
                Crypto currency
            </CryptoInfo>
            <CryptoInfo backPath="/">
                {selectCrypto.asset_id}
            </CryptoInfo>
            <Heading
                title="Total"
                margin="29px 0 19px 50px"
                fontSize='17px'
            />
            <ItemSelect selected={false} crypto={selectCrypto} />
            <Heading
                title="Select promo"
                margin="39px 0 15px 50px"
                fontSize='17px'
            />
            {promo.map((promo) => <Promo key={promo.id} promo={promo} />)}
            <Link to="/payment"><button className='btn' onClick={(e) => handlePayment(e)}>next</button></Link>
        </Fragment>
    )
}
