import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from "react-redux"
import axios from "axios"

const mapState = ({ payment }) => ({
    payment: payment.payment,
})


export default function CopyPaymentAddress() {
    const { payment } = useSelector(mapState)

    const [value, setValue] = useState("payment address")
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const fetchPaymentData = async () => {
            const res = await axios.get(`https://api.nowpayments.io/v1/payment/${payment.payment_id}`, {
                headers: {
                    'x-api-key': '8PTDYRF-SHM4T4H-NZZ9KSN-X7ZK23A',
                }
            })
            console.log("fetchPaymentData", res.data.pay_address)
            setValue(res.data.pay_address)
        }

        fetchPaymentData()
    }, [])


    return (
        <div className='copyPaymentAddress'>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <CopyToClipboard text={value}
                onCopy={() => setCopied(true)}
            >
                <button className='btn'
                    style={{
                        width: "100px",
                        height: "40px",
                        margin: "0"
                    }}
                >
                    Copy
                </button>
            </CopyToClipboard>
        </div>
    )
}
