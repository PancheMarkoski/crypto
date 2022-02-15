import React from 'react';

export default function Paragraph({ children, margin, width, height, textAlign }) {
    return (
        <div
            className='paragraph'
            style={{
                margin: margin,
                width: width,
                height: height,
                textAlign: textAlign,
            }}
        >
            {children}
        </div>
    );
}
