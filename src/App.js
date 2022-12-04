import {useEffect} from 'react'
import "./App.css"; 
import axios from 'axios'; 
import TableCoins from './TableCoins';

export default function App() {
  const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h")
    console.log(res.data);
  }
  useEffect(()=>{
    getData(); 
  }, [])
  return (
    <div className='App'>
      <h1>Coin Market</h1>
      <TableCoins />
    </div>
  )
}

