import React from "react";
import "./Convert.css";

export default function InputConvert({ coin }) {
  return (
    <>
      <div className="input">
        <input type="number" placeholder="0" />
        <div className="select">
          <select>
            {coin.map((co, index) => {
              if(index == 0){
              return <option selected="selected" value={co.symbol} key={co.id}>{co.symbol}</option>
              }else{
              return <option value={co.symbol} key={co.id}>{co.name}</option>
              }
              }
            )}
          </select>
        </div>
      </div>
    </>
  );
}
