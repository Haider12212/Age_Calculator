import React, { useState } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  function calculateAge() {
    const today = new Date();
    const inputDay = parseInt(day);
    const inputMonth = parseInt(month);
    const inputYear = parseInt(year);

    if (isNaN(inputDay) || inputDay <= 0 || inputDay > 31) {
      setDayError(true);
      return;
    }
    setDayError(false);

    if (isNaN(inputMonth) || inputMonth <= 0 || inputMonth > 12) {
      setMonthError(true);
      return;
    }
    setMonthError(false);

    const currentYear = new Date().getFullYear(); // Get the current year

    // ...
    
    if (isNaN(inputYear) || inputYear <= 0 || inputYear > currentYear) {
      setYearError(true);
      return;
    }
    setYearError(false);
    

    const birthDate = new Date(inputYear, inputMonth - 1, inputDay);

    const diffTime = Math.abs(today - birthDate);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    const diffMonths = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * (365.25 / 12))
    );
    const diffDays = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24 * (365.25 / 12))) /
        (1000 * 60 * 60 * 24)
    );

    document.getElementById("yearLabel").textContent = diffYears;
    document.getElementById("monthLabel").textContent = diffMonths;
    document.getElementById("dayLabel").textContent = diffDays;
  }

  return (
    <div className='container'>
      <Helmet>
        <title>Age Calculator</title>
        <meta name="description" content="Age Calculator" />
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" />
      </Helmet>
      <main className='main'>
        <div className='card'>
          <div className='grid'>
            <div className='gridItem'>
              <label className={`label ${dayError ? 'error' : ''}`} htmlFor="day">D A Y</label>
              <input
                className={`input ${dayError ? 'error' : ''}`}
                type="number"
                id="day"
                name="day"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              />
            </div>
          
            <div className='gridItem'>
                <label className={`label ${monthError ? 'error' : ''}`} htmlFor="month">M O N T H</label>
                <input
                  className={`input ${monthError ? 'error' : ''}`}
                  type="number"
                  id="month"
                  name="month"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  required
                />
            </div>

            <div className='gridItem'>
                <label className={`label ${yearError ? 'error' : ''}`} htmlFor="year">Y E A R</label>
                <input
                  className={`input ${yearError ? 'error' : ''}`}
                  type="number"
                  id="year"
                  name="year"
                  placeholder="YYYY"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
                {yearError && <span className="errorMessage">Invalid year can't be 0 or in future</span>}
              </div>
            </div>
            <div className='buttonContainer'>
              <button className='button' onClick={calculateAge}>
                <img src="/images/icon-arrow.svg" width={50} height={50} alt="Submit" />
              </button>
            </div>
            <div className='resultContainer'>
              <label className='result' htmlFor="result" id="yearLabel">--</label>
              <label className='resultLabel' htmlFor="result">years</label>
  
              <label className='result' htmlFor="result" id="monthLabel">--</label>
              <label className='resultLabel' htmlFor="result">months</label>
  
              <label className='result' htmlFor="result" id="dayLabel">--</label>
              <label className='resultLabel' htmlFor="result">days</label>
            </div>
          </div>
        </main>
        <footer className='footer'>
          <p className='footerText'>Made by <a href="">MUHAMMAD HAIDER SHEIKH</a></p>
        </footer>
      </div>
      
    );
  }
  
  export default App;
  
