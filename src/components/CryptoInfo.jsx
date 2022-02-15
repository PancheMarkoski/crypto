import React from 'react';

import { SiBitcoin } from 'react-icons/si';
import activeimg from "../img/check.png"
import { Link } from 'react-router-dom'

export default function CryptoInfo({ children, SiBitcoin, backPath }) {
    return (
        <div className='cryptoInfo'>
            <div>
                {SiBitcoin ? <span><SiBitcoin className="cryptoInfo__icon" /></span> : <span><img src={activeimg} className="cryptoInfo__icon" /></span>}
                <p>{children}</p>
            </div>
            <Link to={backPath}>
                <span>change</span>
            </Link>
        </div>
    );
}
