import React from 'react'

export const Header = () => {
  return (
    <header className='app-header'>
      <p >Crypto Stadistics</p>
      <select name="coinSelect" id="coinSelect">
      <option >USD </option>
      </select>
      
    </header>
  )
}
