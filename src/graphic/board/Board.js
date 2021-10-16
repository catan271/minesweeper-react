import React from 'react'
import styled from 'styled-components'

import MineField from './MineField'
import BoardProvider from '../../context/BoardProvider'
import Control from './Controls'

export default function Board() {
    return (
        <BoardStyle className="board">
            <BoardProvider>
                <Control mine={5}/>
                <MineField height={9} width={9} mine={5}/>
            </BoardProvider>
        </BoardStyle>
    )
}

const BoardStyle = styled.div`
    margin: auto;
    background-color: #C6C6C6;
    border-width: 4px;
    border-style: solid;
    border-color: #fff #808080 #808080 #fff;
`