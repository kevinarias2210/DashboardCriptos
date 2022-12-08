import React, {useState, useRef, useEffect} from "react";
import "./Convert.css";

export default function InputConvert({ coin,  sel = "btc", fun, other,text }) {
  const selRef = useRef(null)
  const [selVal, setSelVal] = useState(sel)
 

  return (
    <>
      <div className="input">
        <input type="number" placeholder="0" onChange={e => text(e.target.value)}/>
        <div data-content="gg" className="select">
          <img src="" alt="" />
          <select value={selVal} ref={selRef} onChange={() => {
              setSelVal(selRef.current.value)
              fun(selRef.current.value)
            }}>
            {coin.map((co) => {
              if(co.symbol === selVal){
                selRef.current.previousSibling.src = co.image
                return <option value={co.symbol} key={co.id}>{co.symbol}</option>
              }else if(co.symbol != other){
                return <option value={co.symbol} key={co.id}>{co.name}</option>
              }
              /* if(index === sel){
              return <option selected value={co.symbol} key={co.id}>{co.symbol}</option>
              }else{
              return <option value={co.symbol} key={co.id}>{co.name}</option>
              }
              } */
            })}
          </select>
        </div>
      </div>
    </>
  );
}
