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
  console.log(JSON.stringify(data));
  return (
    <div className="mb-4">
      <div className="divider divider-primary mb-10 mt-10">
        <h2 className="subtitle text-primary text-sm md:text-xl lg:text-2xl">
          Historial
        </h2>
      </div>
      <div className="max-h-80 overflow-y-auto" >
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
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{row[column]}</td>
                  ))}
                </tr>
              ))}
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
