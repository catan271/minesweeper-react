import React from 'react'
import styled from 'styled-components'

export default function Digit({ value, length }) {
    let digits = value.toString().split('')
    while (digits.length < length) digits = ['0', ...digits]
    digits = digits.slice(- length)

    return (
        <DigitStyle className="digits">
            {digits.map((d, index) => <div key={index} className={'digit digit' + d}></div>)}
        </DigitStyle>
    )
}

const DigitStyle = styled.div`
    display: flex;
    gap: 2px;
    background-color: #000;
    border-style: solid;
    border-width: 2px;
    border-color: #808080 #fff #fff #808080;

    .digit {
        width: 16.5px;
        height: 31.5px;
    }
`
