/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

// Valores base para la predicción de probabilidad
const baseValues = {
  temperatura: { alta: 15, baja: 5 },
  precipitacion: { alta: 100, baja: 10 },
  humedad: { alta: 70, baja: 50 },
  presion: { alta: 640, baja: 600 },
  viento: 15,
};

// Función para calcular la probabilidad
const calcularProbabilidad = (dato) => {
  const { "Temperatura Media": temperatura, Precipitación: precipitacion, "Humedad Relativa Media": humedad, Presion: presion, "Velocidad de Viento Media": viento } = dato;

  // Evaluar condiciones para alta probabilidad
  const esAlta =
    temperatura >= baseValues.temperatura.alta &&
    precipitacion <= baseValues.precipitacion.baja &&
    humedad >= baseValues.humedad.alta &&
    presion >= baseValues.presion.alta &&
    viento <= baseValues.viento;

  // Evaluar condiciones para media probabilidad
  const esMedia =
    (temperatura >= baseValues.temperatura.baja && temperatura < baseValues.temperatura.alta) ||
    (precipitacion > baseValues.precipitacion.baja && precipitacion < baseValues.precipitacion.alta) ||
    (humedad < baseValues.humedad.alta && humedad >= baseValues.humedad.baja) ||
    (presion < baseValues.presion.alta && presion >= baseValues.presion.baja) ||
    (viento <= baseValues.viento);

  return esAlta ? "Alta" : esMedia ? "Media" : "Baja";
};

// Función para formatear la fecha
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });
};

// Componente de cada Estación
const Estacion = ({ nombre, coordenadas, historial }) => {
  const [dataMeses, setDataMeses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const meses = Array.from({ length: 12 }, (_, i) => ({
      mes: new Date(0, i).toLocaleString("es-ES", { month: "long" }),
      probabilidad: "(no predecido)",
    }));

    historial.forEach((dato) => {
      const mesIndex = new Date(dato.fecha).getMonth();
      const probabilidad = calcularProbabilidad(dato);

      // Solo establece la probabilidad si está en "(no predecido)"
      if (meses[mesIndex].probabilidad === "(no predecido)") {
        meses[mesIndex].probabilidad = probabilidad;
      } else {
        if (probabilidad === "Alta") {
          meses[mesIndex].probabilidad = "Alta";
        }
      }
    });

    setDataMeses(meses);
  }, [historial]);

  const totalPages = Math.ceil(historial.length / itemsPerPage);
  const currentItems = historial.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="station-section mb-10">
      <h2 className="text-2xl font-bold mb-4">{nombre}</h2>

      <div className="relative flex max-sm:flex-col">
        <div className="flex-1">
          <iframe
            title={`Mapa meteorológico de ${nombre}`}
            width="100%"
            height="400px"
            src={`https://embed.windy.com/embed2.html?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&zoom=10&level=surface&overlay=rain&menu=&message=&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&detailLat=${coordenadas.latitud}&detailLon=${coordenadas.longitud}&metricWind=default&metricTemp=default&radarRange=-1`}
            frameBorder="0"
          ></iframe>
          <div className="absolute top-2 left-2 bg-white p-2 rounded shadow">
            <span>Latitud: {coordenadas.latitud}</span>
            <br />
            <span>Longitud: {coordenadas.longitud}</span>
          </div>
        </div>

        <div className="flex-1 p-4">
          <h3 className="text-lg font-bold mb-2">Meses y Probabilidad</h3>
          <table className="table table-xs w-full">
            <thead>
              <tr>
                <th className="text-black">Mes</th>
                <th className="text-black">Probabilidad</th>
              </tr>
            </thead>
            <tbody>
              {dataMeses.map((item, index) => (
                <tr key={index}>
                  <td className="text-black">{item.mes}</td>
                  <td className="text-black">{item.probabilidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <h3 className="text-lg font-bold mb-2">Historial de Datos</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="text-black">Fecha</th>
              <th className="text-black">Temperatura (°C)</th>
              <th className="text-black">Precipitación (mm)</th>
              <th className="text-black">Humedad (%)</th>
              <th className="text-black">Presión (hPa)</th>
              <th className="text-black">Viento (km/h)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((dato, index) => (
              <tr key={index}>
                <td className="text-black">{formatDate(dato.fecha)}</td>
                <td className="text-black">{dato["Temperatura Media"]}</td>
                <td className="text-black">{dato.Precipitación}</td>
                <td className="text-black">{dato["Humedad Relativa Media"]}</td>
                <td className="text-black">{dato.Presion}</td>
                <td className="text-black">{dato["Velocidad de Viento Media"]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-4">
          <div className="join">
            {[...Array(totalPages)].map((_, index) => (
              <input
                key={index}
                className={`join-item btn btn-sm ${currentPage === index + 1 ? "checked" : ""}`}
                type="radio"
                name="options"
                id={`page-${index + 1}`}
                aria-label={`${index + 1}`}
                checked={currentPage === index + 1}
                onChange={() => setCurrentPage(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente Principal
const MapaEstaciones = () => {
  const [estacionesData, setEstacionesData] = useState([]);

  useEffect(() => {
    const fetchEstacionesData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        const estaciones = response.data.reduce((acc, dato) => {
          acc[dato.estacion] = acc[dato.estacion] || [];
          acc[dato.estacion].push(dato);
          return acc;
        }, {});
        setEstacionesData(Object.entries(estaciones));
      } catch (error) {
        console.error("Error al cargar los datos de estaciones:", error);
      }
    };

    fetchEstacionesData();
  }, []);

  return (
    <div>
      {estacionesData.map(([nombre, historial], index) => (
        <Estacion key={index} nombre={nombre} coordenadas={historial[0]} historial={historial} />
      ))}
    </div>
  );
};

export default MapaEstaciones;
