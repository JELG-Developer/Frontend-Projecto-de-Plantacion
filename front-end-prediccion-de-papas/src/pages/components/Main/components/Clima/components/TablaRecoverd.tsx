import axios from "axios";
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Definición de la interfaz para los datos climáticos
interface ClimateData {
  estacion: string;
  Precipitación: number;
  "Temperatura Media": number;
  "Humedad Relativa Media": number;
  Presion: number;
  "Velocidad de Viento Media": number;
}

export const TablaRecoverd = () => {
  const [climateData, setClimateData] = useState<ClimateData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [prediccion, setPrediccion] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de elementos por página

  useEffect(() => {
    const fetchClimateData = async () => {
      setLoading(true);
      try {
        if (prediccion !== null && prediccion !== undefined) {
          const response = await axios.post(
            "http://127.0.0.1:8000/prediccion",
            {
              periodo: prediccion, // Envías el valor de predicción
            }
          );
          setClimateData(response.data);
          setCurrentPage(1); // Reiniciar a la primera página cuando se obtienen nuevos datos
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
    "estacion",
    "Precipitación",
    "Temperatura Media",
    "Humedad Relativa Media",
    "Presion",
    "Velocidad de Viento Media",
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePrediccion = () => {
    const predictionResult = parseInt(inputValue);
    if (!isNaN(predictionResult)) {
      setPrediccion(predictionResult);
    } else {
      setPrediccion(null); // Reiniciar a null si la entrada no es válida
    }
  };

  // Calcular total de páginas
  const totalPages = Math.ceil(climateData.length / itemsPerPage);

  // Obtener los elementos actuales para la página actual
  const currentItems = climateData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cambiar de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Función para descargar como PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [columns],
      body: climateData.map((item) => [
        item.estacion,
        item["Precipitación"],
        item["Temperatura Media"],
        item["Humedad Relativa Media"],
        item["Presion"],
        item["Velocidad de Viento Media"],
      ]),
      theme: "grid", // Estilo de tabla
      styles: { cellPadding: 3, fontSize: 10 },
      margin: { top: 10 },
    });

    doc.save("prediccion.pdf"); // Nombre del archivo PDF
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="divider divider-primary mb-10 mt-10">
        <h2 className="subtitle text-primary text-sm md:text-xl lg:text-2xl">
          Predicción
        </h2>
      </div>
      <div className="mb-4 ">
        <div className="flex gap-2 items-center">
          <p>¿Cuántos meses debo predecir?</p>
          <input
            type="text"
            className="grow text-right max-w-20 bg-base-200 p-2 rounded-md"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="focus:outline-none bg-sky-500 p-2"
            onClick={handlePrediccion}
          >
            Predecir
          </button>
          <button
            className="focus:outline-none bg-green-500 p-2"
            onClick={downloadPDF} // Botón para descargar PDF
          >
            Descargar PDF
          </button>
        </div>

        {/* Mostrar alerta si no hay predicción */}
        {prediccion === null ? (
          <div role="alert" className="alert alert-info mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Elabore su predicción para mostrar los datos.</span>
          </div>
        ) : (
          <div className="max-h-80 overflow-y-auto mt-8">
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    {columns.map((column, index) => (
                      <th key={index} className="text-black">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((row, rowIndex) => (
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
                      <th key={index}></th>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {/* Paginación */}
        {prediccion !== null && (
          <div className="flex justify-center mt-4">
            <div className="join">
              {[...Array(totalPages)].map((_, index) => (
                <input
                  key={index}
                  className="join-item btn btn-sm"
                  type="radio"
                  name="options"
                  id={`page-${index + 1}`}
                  aria-label={`${index + 1}`}
                  checked={currentPage === index + 1}
                  onChange={() => handlePageChange(index + 1)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
