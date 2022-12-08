import {useEffect, useState} from 'react'
import "./App.css"; 
import axios from 'axios'; 
import CardPrincipal from './CardPrincipal';
import TableCoins from './TableCoins';
import Card from './Card'
import Convert from './Convert';
import Footer from './Footer'
import Header from './Header'
import {ThemeProvider} from "./Context/ThemeProvider";

export default function App() {
  const [coins, setCoins] = useState()
  let currency = "usd"
  const getData = async () =>{
    /* const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h")
    console.log(res.data);
    setCoins(res.data); */
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C90d%2C1y")
    const json = await response.json()
    setCoins(json)
  }
  useEffect(() => {
    getData()
  },[])
  /* async function getApi(){
    /* fetch("https://api.coingecko.com/api/v3/simple/price?idszfsdf")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(e => console.log("Error:",e))
    try{
      const response = await fetch("https://api.coingecko.com/api/v3/cosdfsd")
      const json = await response.json()
      console.log(json)
    }catch(e){
      console.log(e)
    }
  } */
  
  return (
    <div className='App'>
       <ThemeProvider>
        <Header/>
       </ThemeProvider>
      <main>
        {coins != undefined && <CardPrincipal json={coins[0]}/>}
        <div className="cards_con">
          {!coins ? "Cargando..." : coins.map(({symbol, image, current_price,price_change_percentage_30d_in_currency},index) =>{
            if(index != 0) {
             return <Card price={`${symbol} - ${current_price} ${currency} `} porcentaje={deleteDec(price_change_percentage_30d_in_currency,2)} img={image}/>
            }
          })
          }
        </div>
      </main>
      <Convert/>
      {/* <TableCoins coins={coins}/> */}
      <Footer/>
    </div>
  )

}
export function deleteDec(val, decimal) {
  return val.toFixed(decimal)
}
