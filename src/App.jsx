import "./main.css"

function App() {

  const clicked = () => {
    document.getElementById("1").checked = 1
  }


  return (
    <div>
      <div className="draw-field">
        {Array.apply(0, Array(128*64)).map((x, number) => {
          return (
            <div>
              <input type="checkbox" id="1" style={{display: "none"}}></input>
              <label for="1" onClick={() => clicked()}>
                <div className="pixels"></div>
              </label>
            </div>
          )
        })}
      </div>
       {(function () {for (let i = 1; i < 10; i++) {
        return (
          <h1>1234</h1>
        )
       }})()}
    </div>
  );
}

export default App;
