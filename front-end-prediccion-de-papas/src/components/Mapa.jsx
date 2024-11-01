import { useEffect, useState } from 'react';
import axios from 'axios';

// Valores base para la predicción de probabilidad
const baseValues = {
  temperatura: { min: 10, max: 20 },
  precipitacion: { min: 400, max: 800 },
  humedad: { min: 60, max: 80 },
  presion: { min: 600, max: 700 },
  viento: 20, // en km/h
};

// Función para calcular la probabilidad
const calcularProbabilidad = (dato) => {
  const { "Temperatura Media": temperatura, Precipitación: precipitacion, "Humedad Relativa Media": humedad, Presion: presion, "Velocidad de Viento Media": viento } = dato;

  let probabilidad = 'Baja';
  if (
    temperatura >= baseValues.temperatura.min &&
    temperatura <= baseValues.temperatura.max &&
    precipitacion >= baseValues.precipitacion.min &&
    precipitacion <= baseValues.precipitacion.max &&
    humedad >= baseValues.humedad.min &&
    humedad <= baseValues.humedad.max &&
    presion >= baseValues.presion.min &&
    viento <= baseValues.viento
  ) {
    probabilidad = 'Alta';
  } else if (
    (temperatura >= baseValues.temperatura.min && temperatura <= baseValues.temperatura.max) ||
    (precipitacion >= baseValues.precipitacion.min && precipitacion <= baseValues.precipitacion.max) ||
    (humedad >= baseValues.humedad.min && humedad <= baseValues.humedad.max) ||
    (presion >= baseValues.presion.min && presion <= baseValues.presion.max) ||
    viento <= baseValues.viento
  ) {
    probabilidad = 'Media';
  }

  return probabilidad;
};

// Función para formatear la fecha
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Asegura que el día tenga 2 dígitos
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Componente de cada Estación
// eslint-disable-next-line react/prop-types
const Estacion = ({ nombre, coordenadas, historial }) => {
  const [dataMeses, setDataMeses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de elementos por página

  useEffect(() => {
    // Inicializar un objeto con los meses del año
    const meses = {
      Enero: null,
      Febrero: null,
      Marzo: null,
      Abril: null,
      Mayo: null,
      Junio: null,
      Julio: null,
      Agosto: null,
      Septiembre: null,
      Octubre: null,
      Noviembre: null,
      Diciembre: null,
    };

    // Procesar los datos de historial para predecir la probabilidad por mes
    // eslint-disable-next-line react/prop-types
    historial.forEach(dato => {
      const mes = new Date(dato.fecha).toLocaleString('es-ES', { month: 'long' });

      // Solo agregar si el mes no ha sido definido antes
      if (Object.prototype.hasOwnProperty.call(meses, mes) && meses[mes] === null) {
        const probabilidad = calcularProbabilidad(dato);
        meses[mes] = probabilidad;
      }
    });

    // Asegurarse de que hay exactamente 12 meses
    const resultadoFinal = Object.entries(meses).map(([mes, probabilidad]) => ({
      mes,
      probabilidad: probabilidad || 'Baja' // Asignar 'Baja' si no se encontró probabilidad
    }));

    setDataMeses(resultadoFinal);
  }, [historial]);

  // Manejar la paginación
  // eslint-disable-next-line react/prop-types
  const totalItems = historial.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  // eslint-disable-next-line react/prop-types
  const currentItems = historial.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="station-section mb-10">
      <h2 className="text-2xl font-bold mb-4">{nombre}</h2>

      {/* Sección de Mapa y Predicción de Meses */}
      <div className="flex">
        <div className="flex-1">
          <iframe
            title={`Mapa meteorológico de ${nombre}`}
            width="100%"
            height="400px"
            // eslint-disable-next-line react/prop-types
            src={`https://embed.windy.com/embed2.html?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&zoom=8&level=surface&overlay=rain&menu=&message=&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&detailLat=${coordenadas.latitud}&detailLon=${coordenadas.longitud}&metricWind=default&metricTemp=default&radarRange=-1`}
            frameBorder="0"
          ></iframe>
        </div>

        <div className="flex-1 p-4">
          <h3 className="text-lg font-bold mb-2">Meses y Probabilidad</h3>
          <table className="table table-xs w-full">
            <thead>
              <tr>
                <th>Mes</th>
                <th>Probabilidad</th>
              </tr>
            </thead>
            <tbody>
              {dataMeses.map((item, index) => (
                <tr key={index}>
                  <td>{item.mes}</td>
                  <td>{item.probabilidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla de Historial con paginación */}
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Historial de Datos</h3>
        <table className="table table-xs w-full">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Temperatura (°C)</th>
              <th>Precipitación (mm)</th>
              <th>Humedad (%)</th>
              <th>Presión (hPa)</th>
              <th>Viento (km/h)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((dato, index) => (
              <tr key={index}>
                <td>{formatDate(dato.fecha)}</td> {/* Formatear la fecha aquí */}
                <td>{dato["Temperatura Media"]}</td>
                <td>{dato.Precipitación}</td>
                <td>{dato["Humedad Relativa Media"]}</td>
                <td>{dato.Presion}</td>
                <td>{dato["Velocidad de Viento Media"]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Controles de Paginación */}
        <div className="flex justify-center mt-4">
          <div className="join">
            {[...Array(totalPages)].map((_, index) => (
              <input
                key={index}
                className={`join-item btn btn-sm ${currentPage === index + 1 ? 'checked' : ''}`} // Marcar la opción seleccionada
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
        const response = await axios.get('http://127.0.0.1:8000/');
        const estaciones = response.data.reduce((acc, dato) => {
          if (!acc[dato.estacion]) acc[dato.estacion] = [];
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
        <Estacion key={index} nombre={nombre} coordenadas={{ latitud: historial[0].latitud, longitud: historial[0].longitud }} historial={historial} />
      ))}
    </div>
  );
};

export default MapaEstaciones;
