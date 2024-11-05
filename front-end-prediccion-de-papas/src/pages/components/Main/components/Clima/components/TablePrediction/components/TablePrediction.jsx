import React, { useState } from "react";

export const TablePrediction = ({ climateData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Número de elementos por página
  const totalPages = Math.ceil(climateData.length / itemsPerPage);

  // Obtener los elementos actuales para la página actual
  const currentItems = climateData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-4">
      <h2 className="py-4 font-semibold text-xl">Tabla de Predicciones</h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Estación</th>
              <th>Precipitación</th>
              <th>Temperatura Media</th>
              <th>Humedad Relativa Media</th>
              <th>Presión</th>
              <th>Velocidad de viento media</th>
              <th>MSE</th>
              <th>MAE</th>
              <th>RMSE</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td> {(currentPage - 1) * itemsPerPage + index + 1} </td>
                <td>{item.estacion}</td>
                <td>{item["Precipitación"].toFixed(2)}</td>
                <td>{item["Temperatura Media"].toFixed(2)}</td>
                <td>{item["Humedad Relativa Media"].toFixed(2)}</td>
                <td>{item.Presion.toFixed(2)}</td>
                <td>{item["Velocidad de Viento Media"].toFixed(2)}</td>
                <td>{item["MSE"].toFixed(5)}</td>
                <td>{item["MAE"].toFixed(5)}</td>
                <td>{item["RMSE"].toFixed(5)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Estación</th>
              <th>Precipitación</th>
              <th>Temperatura Media</th>
              <th>Humedad Relativa Media</th>
              <th>Presión</th>
              <th>Velocidad de viento media</th>
            </tr>
          </tfoot>
        </table>
      </div>
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
    </div>
  );
};
