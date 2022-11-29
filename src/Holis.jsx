import {useEffect, useState} from 'react'

export function Holis({name, num}) {
  /* let [count, setCount] = useState(0)
  let [x, setx] = useState(10)
  const accion = _ => setCount(count + 1)
  const accion2 = _ => setx(x + 10) */
  //useEffect(accion,[])
  return (
    <>
      <h1 className="tx">Hola como vas {name} {num}</h1>
     {/*  <button onClick={accion}>aumentar</button>
      <button onClick={accion2}>aumentar x</button> */}
    </>
  )
}