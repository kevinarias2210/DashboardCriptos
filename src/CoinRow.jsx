import React from "react";
import "./coinRow.css"

export default function CoinRow({ coin, index }) {
  console.log(index);
  return (
    <tr>
      <td>{index}</td>
      <td>
        <span>
            {coin.name}
        </span>
        <div className="coin_image_container">
            <img src={coin.image} alt={coin.name} />
        </div>
      </td>
      <td>{coin.current_price}US$</td>
      <td>{coin.market_cap_change_percentage_24h}%</td>
      <td>{coin.total_volume}US$</td>
      <td>{coin.market_cap}US$</td>
    </tr>
  );
}
