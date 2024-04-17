import React, { useState } from 'react';
import dropdown from '../../assets/dropdown.svg';
import './index.css';

export default function Header() {
  const [selectedOption, setSelectedOption] = useState('USD');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  console.log(selectedOption);

  return (
    <>
      <div className="header-top">
        <div className="header-logo">
          <h1>CRYPTOFOLIO</h1>
        </div>
        <div className="header-watchlist">
          <div className="dropdown">
            <button className="dropbtn">{selectedOption}<span><img src={dropdown} alt="dropdown" /></span></button>
            <div className="dropdown-content">
              <a onClick={() => handleSelect('USD')}>USD</a>
              <a onClick={() => handleSelect('USD2')}>USD2</a>
              <a onClick={() => handleSelect('USD3')}>USD3</a>
            </div>
          </div>
          <button className='watchlistbtn'>watchlist</button>
        </div>
      </div>
      <div className="header-bottom">
        <div  className = 'hello'>
        <h1>CRYPTOFOLIO WATCH LIST</h1>
        </div>
        
        <p>Get all the Info regarding your favorite Crypto Currency</p>

      </div>
    </>
  );
}
