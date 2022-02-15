import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import BoxMessage from '../../components/BoxMessage'
import pendingImg from "../../img/pending.png"
import Heading from "../../components/Heading"
import Paragraph from "../../components/Paragraph"
import { IoMdRefresh } from 'react-icons/io';

const mapState = ({ payment }) => ({
    payment: payment.payment
})

export default function TransactionPending() {
    const { payment } = useSelector(mapState)

    return (
        <div>
            <BoxMessage>
                <img alt="pending-icon" src={pendingImg} style={{ margin: "55px 0 0 0" }} />
                <Heading
                    title="Transaction pending"
                    margin="16px auto 25px auto"
                    fontSize='26px'
                />
                <Paragraph
                    textAlign="center"
                    fontSize="14px"
                    margin="0 0 11px 0"
                    height="14px"
                >
                    Transaction ID
                </Paragraph>
                <p style={{
                    fontFamily: "Roboto",
                    color: "#4077C1",
                    fontSize: "14px",
                    fontWeight: "500"
                }}>
                    {payment.payment_id}
                </p>
                <Paragraph
                    textAlign="center"
                    fontSize="14px"
                    width="306px"
                    height="64px"
                    margin="28px auto 0 auto"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...
                </Paragraph>
            </BoxMessage>
            <Link to="/successful">
                <button className='btn'
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        float: "none",
                        margin: "42px auto 0 auto"
                    }}
                >
                    <IoMdRefresh style={{ width: "24px", height: "24px" }} />
                    Refresh
                </button>
            </Link>
        </div>
    )
}
