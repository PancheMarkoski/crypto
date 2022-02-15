import React from 'react'

import ItemSelect from './ItemSelect'

export default function CryptoSelect({ cryptos, promo }) {

  return (
    <div className='cryptoSelect'>
      {cryptos && cryptos.map((crypto) => {
        return <ItemSelect key={crypto.asset_id} crypto={crypto} />
      })}
    </div>
  )
}
