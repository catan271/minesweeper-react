import React, { useReducer } from 'react'

export const GameContext = React.createContext()
export let setGameDispatch = () => {console.log('empty function')}

const defaultGameState = {
    game: 'new-game',
    height: 9,
    width: 9,
    mine: 10
}

const GameReducer = (state, action) => {
    switch (action.type) {
        case 'new-game':
            return { 
                ...state,
                game: 'new-game'
            }
        case 'win':
            return {
                ...state,
                game: 'win' 
            }
        case 'lose': 
            return {
                ...state,
                game: 'lose'
            }
        case 'change-level':
            return {
                game: 'new-game',
                height: action.height,
                width: action.width,
                mine: action.mine
            }
        default: 
            return state
    }
}

export default function BoardProvider({ children }) {
    const [game, dispatchGame] = useReducer(GameReducer, defaultGameState)
    setGameDispatch = dispatchGame

    return (
        <GameContext.Provider value={game}>
                {children}
        </GameContext.Provider>
    )
}