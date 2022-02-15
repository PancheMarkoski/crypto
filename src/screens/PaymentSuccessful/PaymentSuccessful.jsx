import React from 'react'
import { Link } from "react-router-dom"

import BoxMessage from '../../components/BoxMessage'
import Heading from "../../components/Heading"
import Paragraph from "../../components/Paragraph"
import correctIcon from "../../img/correct.png"
import Btn from "../../components/Btn"

export default function PaymentSuccessful() {
    return (
        <div>
            <BoxMessage
                height="372px"
            >
                <img alt="pending-icon" src={correctIcon} style={{ margin: "55px 0 0 0" }} />
                <Heading
                    title="Payment successful"
                    margin="26px auto 20px auto"
                    fontSize='26px'
                />
                <Paragraph
                    textAlign="center"
                    fontSize="14px"
                    width="344px"
                    height="70px"
                    margin="28px auto 0 auto"
                >
                    Nullam placerat erat volutpat mollis congue. Nunc felis libero, interdum eu purus eget, posuere porttitor nisi. Suspendisse potenti. Etiam ut lectus augue.
                </Paragraph>
                <Link to="/">
                    <Btn
                        title="home"
                        float="none"
                        margin="29px auto 0 auto"
                    />
                </Link>
            </BoxMessage>
        </div>
    )
}
