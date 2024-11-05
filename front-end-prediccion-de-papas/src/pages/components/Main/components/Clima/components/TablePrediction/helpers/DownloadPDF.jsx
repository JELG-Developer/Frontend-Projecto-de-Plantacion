import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";

export const DownloadPDF = ({ climateData }) => {
  const columns = [
    "fecha",
    "Estacion",
    "Precipitación",
    "Temperatura Media",
    "Humedad Relativa Media",
    "Presion",
    "Velocidad de Viento Media",
    "Probabilidad",
  ];
  const formatFecha = (fecha) => {
    const date = new Date(fecha);
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
   
    const estacionNombre =
      climateData.length > 0 ? climateData[0].estacion : "EstacionDesconocida";

    const sanitizedEstacionNombre = estacionNombre.replace(
      /[^a-zA-Z0-9]/g,
      "_"
    );

    const fileName = `prediccion-${sanitizedEstacionNombre}-${new Date()
      .toISOString()
      .slice(0, 10)}.pdf`;

    autoTable(doc, {
      head: [columns],
      body: climateData.map((item) => [
        formatFecha(item.fecha),
        item.estacion,
        item["Precipitación"],
        item["Temperatura Media"],
        item["Humedad Relativa Media"],
        item["Presion"],
        item["Velocidad de Viento Media"],
        item["cumpleCondiciones"]
          ? {
              content: "Alta",
              styles: { fillColor: "green", textColor: "white" },
            }
          : {
              content: "Baja",
              styles: { fillColor: "red", textColor: "white" },
            },
      ]),
      theme: "grid", // Estilo de tabla
      styles: { cellPadding: 3, fontSize: 10 },
      margin: { top: 10 },
      columnStyles: {
        0: { cellWidth: 15 },
        1: { cellWidth: 35 },
        2: { cellWidth: 25 },
        3: { cellWidth: 21 },
        4: { cellWidth: 21 },
        5: { cellWidth: 21 },
        6: { cellWidth: 20 },
        7: { cellWidth: 20 },
      },
    });

    doc.save(fileName);
  };
  return (
    <button
      className="focus:outline-none bg-green-500 p-2"
      onClick={handleDownloadPDF} // Botón para descargar PDF
    >
      Descargar PDF
    </button>
  );
};
