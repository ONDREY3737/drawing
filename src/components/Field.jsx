import React from "react";
import "../styles.css"
import { TETROMINES, playfield } from "./Shapes";
import { drawTetromino } from "./Changes";
import { tetroms } from "./Changes";

export default class Playfield extends React.Component {
    render() {
        tetroms.drawTetromino()
        return (
            <div className="playfield">
            {playfield.map((value, key) => value.map((value2, key2) => {
                return (
                    <div className={(playfield[key][key2]) ? "cell-active" : "cell"}>{key}  {key2}</div>
                )
            }))}
            </div>
        )
    }
}