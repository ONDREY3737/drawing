import React from "react";
import { TETROMINES, playfield } from "./Shapes";


export let START_COL = 3
export let START_ROW = 3

const PLAYFIELD_WIDTH = 10
const PLAYFIELD_HEIGHT = 20

export function colplus() {
    for (let i = 0; i< playfield.length; i++) {
        for (let j = 0; j < playfield[i].length; j++) {
            if (i < 17) {playfield[i][j] = 0} // 17 - строка в которой начинается лежащие на полу шейпы
        }
    }
    START_COL += 1
    tetroms.drawTetromino()
}


export const tetroms = {
    randomTetromino : 1,
    inactiveTetromines: new Array(PLAYFIELD_HEIGHT).fill(0).map(() => new Array(PLAYFIELD_WIDTH).fill(0)),

    setRandomTetromino() {
        this.randomTetromino = Math.trunc(Math.random()*TETROMINES.shapes.length)
        this.reFillField()
        this.drawTetromino()
        console.log(this.randomTetromino)
    },
    drawTetromino() {
        for (let i = 0; i< playfield.length; i++) {
            for (let j = 0; j < playfield[i].length; j++) {
                if (i == START_COL) {
                    if (j == START_ROW) {
                        for (let k = 0; k < TETROMINES.shapes[this.randomTetromino].length; k++) {
                            for (let m = 0; m < TETROMINES.shapes[this.randomTetromino][k].length; m++) {
                                if (TETROMINES.shapes[this.randomTetromino][k][m] === 1) {playfield[i+k][j+m] = TETROMINES.shapes[this.randomTetromino][k][m]}

                            }}}}}}},
    moveDown() {
        this.reFillField()
        START_COL += 1
        tetroms.drawTetromino()
        if ((START_COL +  TETROMINES.shapes[this.randomTetromino].length >= 20) || this.checkBottom()) { // 17 - строка в которой начинается лежащие на полу шейпы
            for (let i = 0; i<TETROMINES.shapes[this.randomTetromino].length; i++) {
                for (let k = 0; k<TETROMINES.shapes[this.randomTetromino][i].length; k++) {
                    console.log(TETROMINES.shapes[this.randomTetromino][i][k] === 1)
                    if (TETROMINES.shapes[this.randomTetromino][i][k] === 1) {this.inactiveTetromines[START_COL + i][START_ROW + k] = TETROMINES.shapes[this.randomTetromino][i][k]}
                }
            }
        START_COL = 3
        this.drawTetromino()
        }
        },
    moveLeft() {
        this.reFillField()
        START_ROW -= 1
        if ((START_COL +  TETROMINES.shapes[this.randomTetromino].length >= 20) || this.checkBottom()) { // 17 - строка в которой начинается лежащие на полу шейпы
            for (let i = 0; i<TETROMINES.shapes[this.randomTetromino].length; i++) {
                for (let k = 0; k<TETROMINES.shapes[this.randomTetromino][i].length; k++) {
                    if (TETROMINES.shapes[this.randomTetromino][i][k] === 1) {this.inactiveTetromines[START_COL + i][START_ROW + k] = TETROMINES.shapes[this.randomTetromino][i][k]}
                }
            }
        START_COL = 3
        this.drawTetromino()
    }
    },
    moveRight() {
        this.reFillField()
        START_ROW += 1
        if ((START_COL +  TETROMINES.shapes[this.randomTetromino].length >= 20) || this.checkBottom()) { // 17 - строка в которой начинается лежащие на полу шейпы
            for (let i = 0; i<TETROMINES.shapes[this.randomTetromino].length; i++) {
                for (let k = 0; k<TETROMINES.shapes[this.randomTetromino][i].length; k++) {
                    if (TETROMINES.shapes[this.randomTetromino][i][k] === 1) {this.inactiveTetromines[START_COL + i][START_ROW + k] = TETROMINES.shapes[this.randomTetromino][i][k]}
                }
            }
        START_COL = 3
        this.drawTetromino()
    }
    },
    reFillField() {
        for (let i = 0; i< playfield.length; i++) {
            for (let j = 0; j < playfield[i].length; j++) {
                playfield[i][j] = 0 // 17 - строка в которой начинается лежащие на полу шейпы
            }
        }
        for (let i = 0; i< playfield.length; i++) {
            for (let j = 0; j < playfield[i].length; j++) {
                playfield[i][j] = this.inactiveTetromines[i][j]
            }
        }
    },
    checkBottom() {
        let resultsBottom = []
        for (let i = 0; i<TETROMINES.shapes[this.randomTetromino].length; i++) {
            for (let j = 0; j < TETROMINES.shapes[this.randomTetromino][i].length; j++) {
                if (TETROMINES.shapes[this.randomTetromino][i][j] === 1) {
                    resultsBottom.push(this.inactiveTetromines[START_COL + i + 1][START_ROW + j])
                }
                for (let m = 0; m  < resultsBottom.length; m++) {
                    if (resultsBottom[m] === 1) {
                        return 1
                    }
                } 
            }
        }
    },
}


