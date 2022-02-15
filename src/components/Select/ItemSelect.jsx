import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import ActiveImg from "../../img/check.png"
import InactiveImg from "../../img/check(1).png"
import { selectCrypto } from "../../redux/selectCrypto/selectCrypto.action"

const mapState = ({ selectCrypto }) => ({
    cryptoSelected: selectCrypto.selectCrypto
})

export default function ItemSelect({ selected = true, crypto, promo }) {
    const dispatch = useDispatch()
    const { cryptoSelected } = useSelector(mapState)


    const handleSelectCrypto = (selectedCrypto) => {
        dispatch(selectCrypto(selectedCrypto))
        console.log("handleSelectCrypto", selectedCrypto)
    }

    if (crypto) {
        return (
            <div
                className='itemSelect'
                onClick={() => handleSelectCrypto(crypto)}
            >
                {selected && (cryptoSelected && cryptoSelected.asset_id === crypto.asset_id ? <img src={ActiveImg} alt="selected" /> : <img src={InactiveImg} alt="selected" />)}
                <p>{crypto.asset_id}</p>
                {!selected && <p className='itemSelect__total'>{10 / crypto.price_usd}</p>}
            </div>
        )
    } else { return null }
}
