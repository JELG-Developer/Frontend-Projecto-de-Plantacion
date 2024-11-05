import React from "react";
import {FormatDataTime} from "../helpers/FormatDataTime"
export const HistoricDataForEstation = ({currentItems , totalPages ,currentPage , setCurrentPage }) => {
  return (
    <div className="mt-6 overflow-x-auto ">
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
              <td className="text-black">{FormatDataTime(dato.fecha)}</td>
              <td className="text-black">{dato["Temperatura Media"]}</td>
              <td className="text-black">{dato.Precipitación}</td>
              <td className="text-black">{dato["Humedad Relativa Media"]}</td>
              <td className="text-black">{dato.Presion}</td>
              <td className="text-black">
                {dato["Velocidad de Viento Media"]}
              </td>
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
              className={`join-item btn btn-sm ${
                currentPage === index + 1 ? "checked" : ""
              }`}
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
  );
};
