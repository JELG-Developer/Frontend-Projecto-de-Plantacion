import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const TablaRecoverd = () => {
  const [climateData, setClimateData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [prediccion, setPrediccion] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Cargar datos del servidor
    const fetchClimateData = async () => {
      setLoading(true);
      try {
        if (prediccion !== null && prediccion !== undefined) {
          const response = await axios.post(
            "http://127.0.0.1:8000/prediccion",
            {
              periodo: prediccion, // Aquí envías el valor de prediccion
            }
          );
          setClimateData(response.data);
          console.log(JSON.stringify(response.data));
        }
      } catch (error) {
        console.error("Error al cargar los datos climáticos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClimateData();
  }, [prediccion]);

  const columns = [
    //"fecha",
    "estacion",
    //"altura",
    //"longitud",
    //"latitud",
    "Precipitación",
    "Temperatura Media",
    "Humedad Relativa Media",
    "Presion",
    "Velocidad de Viento Media",
  ];
  console.log(JSON.stringify(climateData));
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handlePrediccion = () => {
    const predictionResult = parseInt(inputValue);
    setPrediccion(predictionResult);
  };
  if (loading) {
    return <p>Cargando ...</p>;
  }
  return (
    <div className="mb-4">
      <div className="flex gap-2 items-center">
        <p>Cuantos meses debo predecir?</p>
        <input
          type="text"
          className="grow text-right max-w-20 bg-base-200 p-2 rounded-md "
          value={inputValue} // Vincula el valor del input al estado
          onChange={handleInputChange} // Llama a la función al cambiar el input
        />
        <button
          className="focus:outline-none bg-sky-500 p-2 "
          onClick={handlePrediccion}
        >
          Predecir
        </button>
      </div>
      <div className="max-h-80 overflow-y-auto">
        <div className="overflow-x-auto ">
          <table className="table table-xs">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.isArray(climateData) && climateData.length > 0 ? (
                climateData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>{row[column]}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    No hay datos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
