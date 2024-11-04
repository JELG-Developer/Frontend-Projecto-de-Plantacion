import React from "react";

export const TablaHistorica = ({ data }) => {
  const columns = [
    "fecha",
    "estacion",
    "altura",
    "longitud",
    "latitud",
    "Precipitación",
    "Temperatura Media",
    "Humedad Relativa Media",
    "Presion",
    "Velocidad de Viento Media",
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="mb-4 ">
      <div className="divider divider-primary mb-10 mt-10">
        <h2 className="subtitle text-primary text-sm md:text-xl lg:text-2xl">
          Historial
        </h2>
      </div>
      <div className="max-h-80 overflow-y-auto">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="text-black">
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="text-black">
                      {column === "fecha"
                        ? formatDate(row[column])
                        : row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
