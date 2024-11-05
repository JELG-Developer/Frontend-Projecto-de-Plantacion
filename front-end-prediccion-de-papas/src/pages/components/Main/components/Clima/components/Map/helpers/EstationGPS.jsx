import { useEffect, useState } from "react";
import { MapForEstation } from "../components/MapForEstation";
import { TableMounths } from "../components/TableMounths";
import { HistoricDataForEstation } from "../components/HistoricDataForEstation";

export const EstacionGPS =({ nombre, coordenadas, historial }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; //elementoa x pagina
  // Manejar la paginación
  console.log("Nombre de la estacion es : " + nombre)
  // console.log("Su historial es : " + JSON.stringify(historial.length))
  const totalItems = historial.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = historial.slice(startIndex, startIndex + itemsPerPage);

  // const historial = res.filter((item) => item.estacion === nombre);
  // return [nombre, historial];
  return (
    <div className="station-section mb-10  ">
      <h2 className="text-2xl font-bold ">{nombre}</h2>

      {/* Sección de Mapa y Predicción de Meses */}
      <div className="flex max-sm:flex-col items-center ">
        <MapForEstation coordenadas={coordenadas} nombre={nombre} />
        <TableMounths dataMeses={historial}   />
      </div>

      {/* Tabla de Historial con paginación */}
      <HistoricDataForEstation
        setCurrentPage = {setCurrentPage}
        currentPage={currentPage}
        currentItems={currentItems}
        totalPages={totalPages}
      />
    </div>
  );
};
