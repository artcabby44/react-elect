import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png'; 

function App() {
  // State to store inputs for power and usage time
  const [power, setPower] = useState('');
  const [hours, setHours] = useState('');
  const [rate, setRate] = useState('');
  const [result, setResult] = useState(null);

  // Handle the calculation of electricity consumption
  const calculateConsumption = () => {
    if (power && hours) {
      const consumption = ((power * hours) / 1000) * rate; // Convert watts to kilowatts
      setResult(consumption);
    }
  };

    // Handle the calculation of electricity consumption per 30 days
    const monthlyConsumption = () => {
      if (power && hours) {
        const consumption = (((power * hours) / 1000) * rate) * 30; // Convert watts to kilowatts
        setResult(consumption);
      }
    };

  // Handle input changes
  const handlePowerChange = (e) => setPower(e.target.value);
  const handleHoursChange = (e) => setHours(e.target.value);
  const handleRateChange = (e) => setRate(e.target.value);

  return (
    <div className="App">
       {/* Logo */}
       <img src={logo} alt="Electricity Calculator Logo" className="logo" />
       
      <h1>Electricity Consumption Calculator</h1>
      <div className="form-group">
        <label htmlFor="power">Power (in watts):</label>
        <input
          type="number"
          id="power"
          value={power}
          onChange={handlePowerChange}
          placeholder="Enter device power in watts"
        />
      </div>

      <div className="form-group">
        <label htmlFor="hours">Hours of usage:</label>
        <input
          type="number"
          id="hours"
          value={hours}
          onChange={handleHoursChange}
          placeholder="Enter hours of usage"
        />
      </div>

      <div className="form-group">
        <label htmlFor="rate">Kwh rate:</label>
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={handleRateChange}
          placeholder="Rate per Kwh"
        />
      </div>

      <button onClick={calculateConsumption}>Consumption per day</button>
      <button onClick={monthlyConsumption}>Consumption per Month</button>

      {result !== null && (
        <div className="result">
          <h3>Total Consumption:</h3>
          <p>{result} Php</p>
        </div>
      )}
    </div>
  );
}

export default App;