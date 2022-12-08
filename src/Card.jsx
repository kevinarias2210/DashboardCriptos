import "./Card.css"
import Graph from "./Graph"
import {colorDec} from './App'

export default function Card({porcentaje, price, img}){
    return (
        <div className="card">
            <img src={img} alt=""/>
            <div className="con-main">
                <div className="con-title">
                    <h2 className={`price ${colorDec(porcentaje)}`}>{price}</h2>
                    <h4 className="porcentajes ">{porcentaje}%</h4>
                </div>
                <Graph/>
            </div>
        </div>
    )
}