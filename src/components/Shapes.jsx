import { tetroms } from "./Changes"

const PLAYFIELD_WIDTH = 10
const PLAYFIELD_HEIGHT = 20

export let playfield = new Array(PLAYFIELD_HEIGHT).fill(0).map(() => new Array(PLAYFIELD_WIDTH).fill(0))

export const TETROMINES = {
    shapes: [
        [
            [1,1,1],
            [0,1,0],
        ],
        [
            [1,1,1],
        ],
        [
            [1,0,0],
            [1,0,0],
            [1,1,1],
        ]
    ],
    rotateRight() {
        this.shapes[tetroms.randomTetromino] = this.rotation()
        tetroms.reFillField()
        tetroms.drawTetromino()
    },
    rotation() {

    },
   
}