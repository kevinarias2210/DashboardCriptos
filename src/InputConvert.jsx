import React, {useState, useRef} from "react";
import "./Convert.css";

export default function InputConvert({ coin,  sel = "btc" }) {
  const selRef = useRef(null)
  const [selVal, setSelVal] = useState(sel)

  return (
    <>
      <div className="input">
        <input type="number" placeholder="0" />
        <div className="select">
          <select value={selVal} ref={selRef} onChange={() => {setSelVal(selRef.current.value)}}>
            {coin.map((co) => {
              if(co.symbol === selVal){
                return <option value={co.symbol} key={co.id}>{co.symbol}</option>
              }else{
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
