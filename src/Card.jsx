import "./Card.css"
import Graph from "./Graph"

export default function Card({porcentaje, price, img}){
    return (
        <div className="card">
            <img src={img} alt="" srcset="" />
            <div className="con-main">
                <div className="con-title">
                    <h2 className="price">{price}</h2>
                    <h4 className="porcentajes">{porcentaje}%</h4>
                </div>
                <Graph/>
            </div>
        </div>
    )
}