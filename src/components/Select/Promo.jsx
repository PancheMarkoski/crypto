import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { selectPromo } from "../../redux/setPromo/promo.action"
import ActiveImg from "../../img/check.png"
import InactiveImg from "../../img/check(1).png"

const mapState = ({ promo }) => ({
    promoSelect: promo.selectPromo,
})

export default function Promo({ promo }) {
    const dispatch = useDispatch()
    const { promoSelect } = useSelector(mapState)

    const handlePromoSelect = promo => {

        dispatch(selectPromo(promo))
    }

    return (
        <div
            className='itemSelect'
            onClick={() => handlePromoSelect(promo)}
        >
            {promoSelect && promoSelect.name === promo.name ? <img src={ActiveImg} alt="selected" /> : <img src={InactiveImg} alt="selected" />}
            <p>{promo.name}</p>
        </div>
    )
}
