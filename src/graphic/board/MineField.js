import React, { useState, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Game from '../../game/Game'
import { GameContext } from '../../context/BoardProvider'
import { setMineDispatch } from './Controls'

export default function MineField() {
    const gameState = useContext(GameContext)
    const [game, setGame] = useState(new Game(gameState.height, gameState.width, gameState.mine))
    const flag = useRef(gameState.mine)
    const field = useRef()

    useEffect(() => {
        if (gameState.game === 'new-game') {
            setGame(new Game(gameState.height, gameState.width, gameState.mine))
            game.newGame(field.current)
            flag.current = gameState.mine
            setMineDispatch(flag.current)
        }
        // eslint-disable-next-line
    }, [gameState])

    const handleClick = (e) => {
        if (gameState.game !== 'new-game') return
        const index = Number.parseInt(e.target.classList[1].replace('cell-', ''))
        game.revealCell(e.target.parentNode, index)
    }

    const handleFlag = (e) => {
        e.preventDefault()
        if (gameState.game !== 'new-game') return
        const cell = e.target
        if (cell.classList[2] !== 'closed') return
        if (cell.classList[3] === 'flagged') {
            cell.classList.remove('flagged')
            flag.current++
            setMineDispatch(flag.current)
        }
        else if (flag.current > 0) {
            cell.classList.add('flagged')
            flag.current--
            setMineDispatch(flag.current)
        }
    }

    return (
        <MineFieldStyle theme={{height: gameState.height, width: gameState.width}} className="field" ref={field}>
            {game.map.map((e, index) => {
                return <div className={`cell ${'cell-'+index} closed`} onClick={handleClick} onContextMenu={handleFlag} key={index}></div>
            })}
        </MineFieldStyle>
    )
}

const MineFieldStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.theme.width}, 24px);
    grid-template-rows: repeat(${props => props.theme.height}, 24px);
    margin: 16px;
    border-width: 4px;
    border-style: solid;
    border-color: #808080 #fff #fff #808080;
`