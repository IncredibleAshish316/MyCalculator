function App() {
  const [display, setDisplay] = React.useState('0');

  const displayInput = (input) => {
    if (display == 0) {
      setDisplay(input);
    } else {
      setDisplay((prev) => prev + input);
    }
  };

  const calculate = () => {
    const ans = eval(display);
    setDisplay(ans);
  };

  const handlekey = (event) => {
    const key = event.key;
    const sym = ['+', '-', '*', '/'];
    if (parseInt(key)) {
      displayInput(key);
    }
    else {

      sym.forEach((x) => {
        if (x == key) {
          displayInput(key);
        }
      })
    }
    if (key == 'Delete') {
      setDisplay((prev) => prev.slice(0, -1))
    }
    if (key == "Enter") {
      calculate();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keypress', handlekey);

    return () => {
      document.removeEventListener('keypress', handlekey);
    }
  })
  return (
    <div className="contain container">
      <div className="grid">
        <div id="display" className="bg-dark">
          <div>{display}</div>
        </div>
        <div
          id="AC"
          className="button btn btn-danger"
          onClick={() => setDisplay(0)}
        >
          AC
        </div>
        <div
          id="per"
          className="button btn btn-dark"
          onClick={() => displayInput("%")}
        >
          %
        </div>
        <div id="()" className=" button btn btn-dark">
          <span className="button btn btn-secondary" onClick={() => displayInput('(')}>(</span>
          
          <span className="button btn btn-secondary" onClick={() => displayInput(')')}>)</span>
        </div>
        <div id="div" className="button btn btn-dark"
          onClick={() => displayInput('/')}>
          /
        </div>
        <div
          id="7"
          className="button btn btn-dark"
          onClick={() => displayInput("7")}
        >
          7
        </div>
        <div
          id="8"
          className="button btn btn-dark"
          onClick={() => displayInput("8")}
        >
          8
        </div>
        <div
          id="9"
          className="button btn btn-dark"
          onClick={() => displayInput("9")}
        >
          9
        </div>
        <div
          id="mult"
          className="button btn btn-dark"
          onClick={() => displayInput("*")}
        >
          *
        </div>
        <div
          id="4"
          className="button btn btn-dark"
          onClick={() => displayInput("4")}
        >
          4
        </div>
        <div
          id="5"
          className="button btn btn-dark"
          onClick={() => displayInput("5")}
        >
          5
        </div>
        <div
          id="6"
          className="button btn btn-dark"
          onClick={() => displayInput("6")}
        >
          6
        </div>
        <div
          id="minus"
          className="button btn btn-dark"
          onclick={() => displayInput("-")}
        >
          -
        </div>
        <div
          id="1"
          className="button btn btn-dark"
          onClick={() => displayInput("1")}
        >
          1
        </div>
        <div
          id="2"
          className="button btn btn-dark"
          onClick={() => displayInput("2")}
        >
          2
        </div>
        <div
          id="3"
          className="button btn btn-dark"
          onClick={() => displayInput("3")}
        >
          3
        </div>
        <div
          id="plus"
          className="button btn btn-dark"
          onClick={() => displayInput("+")}
        >
          +
        </div>
        <div
          id="zero"
          className="button btn btn-dark"
          onClick={() => displayInput("0")}
        >
          0
        </div>
        <div
          id="dot"
          className="button btn btn-dark"
          onClick={() => displayInput(".")}
        >
          .
        </div>
        <div
          id="equal"
          className="button btn btn-dark"
          onClick={() => calculate()}
        >
          =
        </div>
      </div>
    </div >
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
