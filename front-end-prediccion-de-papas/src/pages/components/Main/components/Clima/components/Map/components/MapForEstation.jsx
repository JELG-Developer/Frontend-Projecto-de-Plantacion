import React from "react";

export const MapForEstation = ({ nombre, coordenadas }) => {
  return (
    <div className="flex-1 relative ">
      <iframe
        title={`Mapa meteorológico de ${nombre}`}
        width="100%"
        height="400px"
        src={`https://embed.windy.com/embed2.html?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&zoom=10&level=surface&overlay=rain&menu=&message=&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=&detailLat=${coordenadas.latitud}&detailLon=${coordenadas.longitud}&metricWind=default&metricTemp=default&radarRange=-1`}
        frameBorder="0"
      ></iframe>

      {/* Etiqueta de ubicación sobre el mapa */}
      <div className="absolute top-2 left-2 bg-white p-2 rounded shadow">
        <span>Latitud: {coordenadas.latitud}</span>
        <br />
        <span>Longitud: {coordenadas.longitud}</span>
      </div>
    </div>
  );
};
