import React, { useEffect } from "react"
import "./styles.css"
import Playfield from "./components/Field.jsx";
import { playfield, TETROMINES } from "./components/Shapes.jsx";
import { colplus, setRandomTetromino } from "./components/Changes.jsx";
import { tetroms } from "./components/Changes.jsx";

function App() {

  const [state, setState] = React.useState(0)

  const moveD = () => {
    tetroms.moveDown()
    setState(state + 1)
  }
  const moveL = () => {
    tetroms.moveLeft()
    setState(state + 1)
  }
  const moveR = () => {
    tetroms.moveRight()
    setState(state + 1)
  }

  const rotate = () => {
    TETROMINES.rotateRight()
    setState(state+1)
  }

  const change = () => {
    tetroms.setRandomTetromino()
    setState(state + 1)
  }

  useEffect(() => {
  })

  return (
    <div className="main-div">
      <Playfield></Playfield>
      <button onClick={() => moveL()}>Влево</button>
      <button onClick={() => moveD()}>Вниз</button>
      <button onClick={() => moveR()}>Вправо</button>
      <button onClick={() => change()}>Change</button>
      <button onClick={() => rotate()}>rotate</button>
    </div>
  );
}

export default App;
