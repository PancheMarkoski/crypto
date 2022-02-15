import React from 'react';

import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import img from "../img/image1.png"

export default function RightSection() {
    return (
        <div className='rightSection'>
            <Heading
                title="Easy, fast and secure payments"
                margin="50px 0 0px 50px"
                fontSize='17px'
            />
            <Paragraph
                width="276px"
                height="67px"
                margin="24px 64px 0px 50px"
            >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
            <Paragraph
                margin="34px 64px 0px 50px"
                width="276px"
                height="32px"
                textAlign="center"
            >
                Powered by
            </Paragraph>
            <img style={{
                display: "block",
                margin: "0 auto",
            }}
                src={img} alt='logo' />
        </div>
    );
}
