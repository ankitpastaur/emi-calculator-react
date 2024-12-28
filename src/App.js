import { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseFloat(e.target.value); // Use parseFloat for decimal values

    if (id === "principal") {
      setPrincipal(value);
    } else if (id === "interest") {
      setInterest(value);
    } else if (id === "years") {
      setYears(value);
    }
  };

  const calculateEMI = () => {
    // EMI formula: P * r * (1 + r)^n / [(1 + r)^n - 1]
    if (principal && interest && years) {
      const r = interest / 12 / 100; // Monthly interest rate
      const n = years * 12; // Number of months
      const calculatePower = Math.pow(1 + r, n);
      const calculateAmount =
        principal * ((r * calculatePower) / (calculatePower - 1));
      setEmi(calculateAmount);
    } else {
      setEmi(0); // Reset EMI if inputs are incomplete
    }
  };

  return (
    <div className="App">
      <div className="calc-container">
        <div className="calculator">
          <h2>Principal Loan Amount</h2>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Principal Loan Amount"
            id="principal"
          />
          <h2>Interest Rate</h2>
          <input
            type="number"
            onChange={handleChange}
            placeholder="Rate"
            id="interest"
          />
          <h2>Length of Loan (in years)</h2>
          <input
            type="number"
            onChange={handleChange}
            placeholder="Length of Loan"
            id="years"
          />
          <button onClick={calculateEMI} className="calculate-btn">
            Calculate
          </button>
          <h2>Your Monthly EMI will be: ₹{emi.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
