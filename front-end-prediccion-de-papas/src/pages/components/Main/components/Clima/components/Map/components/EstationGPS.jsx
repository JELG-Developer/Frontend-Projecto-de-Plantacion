import { useState } from "react";
import { MapForEstation } from "./MapForEstation";
import { TableMounths } from "./TableMounths";
import { HistoricDataForEstation } from "./HistoricDataForEstation";
import { TableDaily } from "./TableDaily";

export const EstacionGPS = ({ nombre, coordenadas, historial }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; //elementoa x pagina
  // console.log("Nombre de la estacion es : " + nombre)
  // console.log("Su historial es : " + JSON.stringify(historial.length))
  const totalItems = historial.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = historial.slice(startIndex, startIndex + itemsPerPage);

  const citys = [
    { value: "Chachacomani-Batallas (GPRS)", name: "Viacha" },
    { value: "Chua Cocani_M (GPRS)", name: "Chua cocani" },
    { value: "Huarisuyo (GPRS)", name: "Huarisuyo" },
    { value: "Viacha_M (GPRS)", name: "Chachacomani" },
  ];
  const matchedCity = citys.find((city) => city.value === nombre);
  const cityName = matchedCity ? matchedCity.name : "Nombre no encontrado";

  return (
    <div className="station-section mb-10">
      <h2 className="text-2xl font-bold ">{nombre}</h2>
      {/* Sección de Mapa y Predicción de Meses */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1  ">
        <MapForEstation coordenadas={coordenadas} nombre={nombre} />
        <div className="p-4" >
          <TableMounths dataMeses={historial} />
          <TableDaily city={cityName}   />
        </div>
      </div>
      {/* Tabla de Historial con paginación */}
      <HistoricDataForEstation
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        currentItems={currentItems}
        totalPages={totalPages}
      />
    </div>
  );
};
