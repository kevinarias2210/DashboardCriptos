import React from "react";

export default function CoinRow({ coin, index }) {
  console.log(index);
  return (
    <tr>
      <td>{index}</td>
      <td>{coin.name}</td>
      <td>{coin.current_price}US$</td>
      <td>{coin.market_cap_change_percentage_24h}%</td>
      <td>{coin.total_volume}US$</td>
      <td>{coin.market_cap}US$</td>
    </tr>
  );
}
