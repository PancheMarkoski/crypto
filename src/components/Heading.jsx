import React from 'react';

export default function Heading({ title, margin, fontSize = "26px" }) {
    return <h1
        className='heading'
        style={{
            margin: margin,
            fontSize: fontSize
        }}
    >
        {title}
    </h1>;
}
