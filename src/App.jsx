import { useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';

import './App.css';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  const [isPrincipleInvalid, setIsPrincipleInvalid] = useState(false);

  // Validate Input
  const validateInput = (inputTag) => {
    const { name, value } = inputTag;

    if (name === 'principle') {
      setPrinciple(value);
      setIsPrincipleInvalid(!/^\d+(\.\d+)?$/.test(value)); // Checks if input is a positive number
    } else if (name === 'rate') {
      setRate(value);
    } else if (name === 'year') {
      setYear(value);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    if (principle > 0 && rate > 0 && year > 0) {
      const calculatedInterest = (principle * rate * year) / 100;
      setInterest(calculatedInterest);
    } else {
      alert('Please enter valid inputs for all fields.');
    }
  };

  const handleReset = () => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setInterest(0);
    setIsPrincipleInvalid(false);
  };

  return (
    <div
      style={{ minHeight: '100vh', width: '100%' }}
      className="d-flex justify-content-center align-items-center bg-dark"
    >
      <div style={{ width: '600px' }} className="bg-light rounded p-5">
        <h1>Simple Calculator App</h1>
        <p>Calculate your simple interest easily</p>
        <div className="d-flex flex-column text-light justify-content-center align-items-center bg-warning shadow p-3 rounded">
          <h1>₹ {interest}</h1>
          <p className="fw-bolder">Total Simple Interest</p>
        </div>
        <form className="mt-5">
          <div className="mb-3">
            <TextField
              onChange={(e) => validateInput(e.target)}
              name="principle"
              value={principle}
              className="w-100"
              label="Principle Amount"
              variant="outlined"
            />
          </div>
          {isPrincipleInvalid && (
            <div className="mb-3 text-danger fw-bolder">
              Invalid principle amount
            </div>
          )}
          <div className="mb-3">
            <TextField
              onChange={(e) => validateInput(e.target)}
              name="rate"
              value={rate}
              className="w-100"
              label="Rate of Interest (p.a)%"
              variant="outlined"
            />
          </div>
          <div className="mb-3">
            <TextField
              onChange={(e) => validateInput(e.target)}
              name="year"
              value={year}
              className="w-100"
              label="Time Period (yr)"
              variant="outlined"
            />
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              onClick={handleCalculate}
              style={{ width: '50%', height: '70px' }}
              className="bg-dark"
              variant="contained"
            >
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              style={{ width: '50%', height: '70px' }}
              variant="outlined"
            >
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
