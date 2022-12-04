import React from "react";
import "./tableCoins.css"

function TableCoins({ coins }) {
  console.log(coins);
  return (
    <table>
      <thead>
        <tr>
            <td>Moneda</td>
        </tr>
      </thead>
      <tbody>
        {coins.map(coin => (
            <tr>{coin.name}</tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableCoins;
