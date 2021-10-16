import React, { useContext, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Digit from './Digit'
import { GameContext } from '../../context/BoardProvider'
import { setGameDispatch } from '../../context/BoardProvider'

export let setMineDispatch = () => {console.log('set mine')}

const accurateInterval = function (fn, time) {
    var cancel, nextAt, timeout, wrapper
    nextAt = new Date().getTime() + time
    timeout = null
    wrapper = function () {
        nextAt += time
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
        return fn()
    }
    cancel = function () {
        return clearTimeout(timeout)
    }
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
        cancel: cancel
    }
  }

export default function Control(props) {
    const [mine, setMine] = useState(props.mine)
    setMineDispatch = setMine
    const gameState = useContext(GameContext)
    const [time, setTime] = useState(0)
    let timer = useRef()

    useEffect(() => {
        switch (gameState.game) {
            case 'new-game':
                timer.current?.cancel() 
                setTime(0)
                timer.current = accurateInterval(() => {setTime(time => time + 1)}, 1000)
                break;
            case 'win':
            case 'lose':       
            default:
                timer.current?.cancel() 
                break;
        }
    }, [gameState])

    return (
        <ControlStyle className="control">
            <div className="mine-left"><Digit value={mine} length={3}/></div>            
            <div onClick={() => setGameDispatch({type: 'new-game'})} className={'face ' + gameState.game}></div>
            <div className="timer"><Digit value={time} length={3}/></div>
        </ControlStyle>
    )
}

const ControlStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px;
    padding: 4px;
    border-width: 4px;
    border-style: solid;
    border-color: #808080 #fff #fff #808080;

    .face {
        height: 40px;
        width: 40px;
    }

    .face:active {
        transform: translate(1px, 1px);
    }
`