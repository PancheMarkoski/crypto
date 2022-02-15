import React from 'react'

export default function Btn({ title = "next", float, margin }) {
    return (
        <button className='btn'
            style={{
                float: float,
                margin: margin
            }}
        >
            {title}
        </button>
    )
}
