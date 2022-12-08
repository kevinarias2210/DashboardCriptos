import { FaPlay } from "react-icons/fa";
import './cardPrincipal.css'
import { deleteDec } from './App'
import Graph from "./Graph";

function CardPrincipal({ json: { id,
    symbol,
    current_price,
    image,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_30d_in_currency,
    /* price_change_percentage_90d_in_currency, */
    price_change_percentage_1y_in_currency
}, currency = "usd" }) {

   
    return (
        <>
            <article className="cripto-first">
                <div className="cripto-title">
                    <img src={image} alt="Icono de cripto" />
                    <h2>{symbol} - {current_price} {currency}</h2>
                    {/* <select name="select-percentage" id="select-percentage">
                        <option value="value1" selected>12%</option>
                        <option value="value2">18%</option>
                        <option value="value3">20%</option>
                    </select> */}
                    <h2><FaPlay className="icon-arrow"/>{deleteDec(price_change_percentage_30d_in_currency,2)}%</h2>
                </div>
                <div className="graphic">
                    <Graph type={0} coin={id} currency={currency}/>
                </div>
                <div className="capitalization">
                    <h2>Capitalización</h2>
                    <table className="capitalization-table">
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>1m</th>
                                {/* <th>3m</th> */}
                                <th>1y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                 <td >{deleteDec(price_change_percentage_1h_in_currency, 2)}</td>
                                <td >{deleteDec(price_change_percentage_24h_in_currency, 2)}</td>
                                <td >{deleteDec(price_change_percentage_7d_in_currency, 2)}</td>
                                <td >{deleteDec(price_change_percentage_30d_in_currency, 2)}</td>
                                {/* <td >{deleteDec(price_change_percentage_90d_in_currency, 2)}</td> */}
                                <td >{deleteDec(price_change_percentage_1y_in_currency, 2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    );
}

export default CardPrincipal;