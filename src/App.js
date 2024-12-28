import { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <div className="calc-container">
        <div className="calculator">
          <h2>Principal Loan Amount</h2>
          <input
            onChange={handleClick}
            type="number"
            placeholder="Principal Loan Amount"
            id="principal"
          ></input>
          <h2>Interest Rate</h2>
          <input type="number" placeholder="Rate" id="rate"></input>
          <h2>Length of Loan</h2>
          <input type="number" placeholder="Lenght of Loan" id="years"></input>
          <h2>Your Monthly EMI will be</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
