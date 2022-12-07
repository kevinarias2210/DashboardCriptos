import React from 'react';
import './Header.css';
import { useTheme } from './Context/ThemeProvider';

const Header = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <header className='app-header'>
      <p >Crypto Stadistics</p>
      <div className='select-button'>
      <select name="coinSelect" id="coinSelect">
      <option >USD</option>
      </select>
      <button className='toogleMode' onClick={toggleTheme}>
        {theme.img}
      </button>
      </div>
    </header>
  )
}
export {Header};