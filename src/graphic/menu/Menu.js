import React, { useState } from 'react'
import styled from 'styled-components'

import { setGameDispatch } from '../../context/BoardProvider'

const levels = ['EASY', 'MEDIUM', 'HARD']

const levelData = [
    {
        height: 9,
        width: 9,
        mine: 10
    },
    {
        height: 16,
        width: 16,
        mine: 40
    },
    {
        height: 16,
        width: 30,
        mine: 76
    }
]

export default function Menu() {
    const [index, setIndex] = useState(0)
    const [custom, setCustom] = useState(false)

    const handleClick = (i) => {
        setIndex(i)
        setCustom(false)
        setGameDispatch({
            type: 'change-level',
            ...levelData[i]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const height = Number.parseInt(e.target.height.value)
        const width = Number.parseInt(e.target.width.value)
        const mine = Number.parseInt(e.target.mine.value)
        if (!height || !width || !mine) return
        if (mine >= height * width) return window.alert('Too many mines') 
        setGameDispatch({
            type: 'change-level',
            height,
            width,
            mine
        })
    }

    return (
        <MenuStyle>
            <div className="inner">
                <div className="options">
                    {levels.map((e, i) => (
                        <div key={i} onClick={() => handleClick(i)} className={'option' + (index === i? ' active' : '')}>
                            {e}
                        </div>
                    ))}
                    <div className={'option' + (custom? ' active' : '')} onClick={() => {setIndex(4); setCustom(true)}}>CUSTOM</div>
                </div>
                {custom && <form onSubmit={handleSubmit}>
                    <div>
                        <label>Height: </label><br/>
                        <input type="number" name="height" max="50" min="8"/>
                    </div>
                    <div>
                        <label>Width: </label><br/>
                        <input type="number" name="width" max="50" min="8"/>
                    </div>
                    <div>
                        <label>Mine: </label><br/>
                        <input type="number" name="mine" max="1000" min="1"/>
                    </div>
                    <button>Update</button>
                </form>}
            </div>
        </MenuStyle>
    )
}

const MenuStyle = styled.div`
    background-color: #C6C6C6;
    border-width: 2px;
    border-style: solid;
    border-color: #fff #808080 #808080 #fff;
    margin-bottom: 8px;

    .inner {
        margin: 8px;
        border-width: 2px;
        border-style: solid;
        border-color: #808080 #fff #fff #808080;
        padding: 4px;
    }

    .options {
        display: flex;

        .option {
            height: 36px;
            width: 96px;
            line-height: 36px;
            text-align: center;
            color: white;
        }

        .option.active {
            line-height: 32px;
            border-width: 2px;
            border-style: solid;
            border-color: #fff #808080 #808080 #fff;
        }
    }

    form {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        margin-top: 4px;
        border-top: 2px solid #888;

        input {
            width: 60px;
            outline: none;
        }

        button {
            height: 24px;
            width: 60px;
            border-width: 2px;
            border-style: solid;
            border-color: #fff #808080 #808080 #fff;
            background-color: transparent;
        }
    }

    .option.active:active,
    button:active {
        transform: translate(1px, 1px);
    }
`