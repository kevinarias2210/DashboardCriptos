import { useEffect, useState } from "react";
import axios from "axios";
import InputConvert from "./InputConvert"; // Componente
import { FaExchangeAlt } from "react-icons/fa"; // Icono
import "./Convert.css"; // Estilos

export default function Convert() {
  const [coin, setCoin] = useState([]);

  // Función asíncrona para obtener los datos de la API
  const getData = async () => {
    // Hacer petición a la API
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );

    // Establecer el valor de los datos obtenidos
    setCoin(result.data);

    // Mostrar datos obtenidos en consola
    // console.log(result.data)
  };

  // Obtener los datos cuando el componente cargue
  useEffect(() => {
    // Datos de la API
    getData();
  }, []);

  return (
    <div className="contenedor">
      <h2>Comparación de Monedas</h2>

      <div className="input-convert">
        <InputConvert coin={coin} />

        <FaExchangeAlt className="icono" />

        <InputConvert coin={coin} />
      </div>
    </div>
  );
}
