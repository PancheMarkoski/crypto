import React from 'react'

export default function BoxMessage({ children, height }) {
    return (
        <div className='boxMessage'
            style={{ height: height }}
        >
            {children}
        </div>
    )
}
