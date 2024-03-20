// src/AverageCalculator.js
import React, { useState } from 'react';
const AverageCalculator = () => {
  const [numbers, setNumbers] = useState('');
  const [average, setAverage] = useState(null);
  const handleChange = (event) => {
    setNumbers(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/calculate-average', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ numbers: numbers.split(',').map(Number) }),
      });
      const data = await response.json();
      setAverage(data.average);
    } catch (error) {
      console.error('Error calculating average:', error);
    }
  };

  return (
    <div>
      <h2>Average Calculator </h2>
      <form onSubmit={handleSubmit}>
        <label>Average Calculate {handleSumit}  Numbers {comma-separted} </label>
        <label>
          Numbers (comma-separated):
          <input type="text" value={numbers} onChange={handleChange} />
        </label>
        <button type="submit">Calculate Average</button>
      </form>
      {average !== null && <p>The average is: {average}</p>}
    </div>
  );
};

export default AverageCalculator;
