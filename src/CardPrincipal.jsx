import React from "react";
import { FaPlay } from "react-icons/fa";
import './cardPrincipal.css'

function CardPrincipal() {
    
    return (
        <>
            <article className="cripto-first">
                <div className="cripto-title">
                    <img src="#" alt="Icono de cripto"/>
                    <h2>BTC - 15000 USD</h2>
                    {/*<select name="select-percentage" id="select-percentage">
                        <option value="value1" selected>12%</option>
                        <option value="value2">18%</option>
                        <option value="value3">20%</option>
                    </select>*/}
                    <h2><FaPlay className="icon-arrow"/> 12%</h2>
                </div>
                <div className="graphic">
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
                                <th>3m</th>
                                <th>1y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td id="td-table">+3.5%</td>
                                <td >-7.5%</td>
                                <td >+0.5%</td>
                                <td >-11.5%</td>
                                <td >-3.5%</td>
                                <td >+3.5%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </article>
        </>
    );
}

export default CardPrincipal;