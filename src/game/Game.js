import { setGameDispatch } from "../context/BoardProvider"

export default class Game {
    constructor(height, width, mine) {
        this.height = height
        this.width = width
        this.map = new Array(height * width).fill(0)
        this.remaining = this.map.length - mine
        for (let i = 0; i < mine; i++) {
            let x = Math.floor(Math.random() * (this.map.length - 0.01))
            while (this.map[x] === '.') x = Math.floor(Math.random() * (this.map.length - 0.01))
            this.map[x] = '.'
        }
        for (let i = 0; i < this.map.length; i++) {
            if (this.map[i] === '.') continue
            if (i % width) {
                if (this.map[i - 1] === '.') this.map[i]++
                if (this.map[i - width - 1] === '.') this.map[i]++
                if (this.map[i + width - 1] === '.') this.map[i]++
            }
            if (i % width < width - 1) {
                if (this.map[i + 1] === '.') this.map[i]++
                if (this.map[i - width + 1] === '.') this.map[i]++
                if (this.map[i + width + 1] === '.') this.map[i]++

            }
            if (this.map[i + width] === '.') this.map[i]++
            if (this.map[i - width] === '.') this.map[i]++
        }
    }

    losing(field) {
        setGameDispatch({type: 'lose'})
        for (let i = 0; i < this.map.length; i++) {
            const cell = field.querySelector('.cell-' + i)
            if (cell.classList[2] !== 'closed') continue
            if (this.map[i] !== '.') {
                if (cell.classList[3] === 'flagged') {
                    cell.classList.remove('flagged')
                    cell.classList.add('mis-flagged')
                }
            }
            else cell.classList.add('mine')
            
        }
    }

    winning(field) {
        setGameDispatch({type: 'win'})
        for (let i = 0; i < this.map.length; i++) {
            const cell = field.querySelector('.cell-' + i)
            if (cell.classList[2] === 'closed' && cell.classList[3] !== 'flagged') {
                cell.classList.add('flagged')
            }
        }
    }

    newGame(field) {
        const cells = field.querySelectorAll('.cell')
        cells.forEach((cell, index) => {cell.className = `cell cell-${index} closed`})
    }

    revealCell(field, index) {
        const cell = field.querySelector('.cell-' + index)
        if (!cell || cell.classList[2] !== 'closed' || cell.classList[3] === 'flagged') return
        cell.classList.remove('closed')
        if (this.map[index] === '.') {
            cell.classList.add('mine-red')
            this.losing(field)
        }
        else {
            this.remaining--
            cell.classList.add('type' + this.map[index])
            if (!this.map[index]) {
                if (index % this.width) {
                    this.revealCell(field, index - 1)
                    this.revealCell(field, index - 1 - this.width)
                    this.revealCell(field, index - 1 + this.width)
                }
                if (index % this.width < this.width - 1) {
                    this.revealCell(field, index + 1)
                    this.revealCell(field, index + 1 - this.width)
                    this.revealCell(field, index + 1 + this.width)
                }
                this.revealCell(field, index - this.width)
                this.revealCell(field, index + this.width)
            }
            if (!this.remaining) this.winning(field)
        }
    }
}