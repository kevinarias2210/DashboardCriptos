import {Holis} from './Holis'
import Parrafo from './Parrafo'
import {useState} from 'react'
import "./App.css"

export default function App() {
  let [count, setCount] = useState(0)
  //let [x, setx] = useState(10)
  const accion = _ => setCount(count + 1)
  //const accion2 = _ => setx(x + 10)
  return (<>
    <Holis name="Dylan" num={count}/>
    <Parrafo ex={accion}/>
  </>)
    
}

