import React from "react";
import "./Convert.css";

export default function InputConvert({ coin }) {
  return (
    <>
      <input type="number" placeholder="0" />
      <div className="select">
        <select>
          {coin.map((co) => (
            <option key={co.id}>{co.name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
