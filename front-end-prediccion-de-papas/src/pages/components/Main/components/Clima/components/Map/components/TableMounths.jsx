import React from "react";

export const TableMounths = ({ dataMeses }) => {
  const dataConFechas = dataMeses.map((item) => ({
    ...item,
    fecha: new Date(item.fecha),
  }));
  const ultimaFecha = new Date(
    Math.max(...dataConFechas.map((item) => item.fecha))
  );

  const ultimateYear = ultimaFecha.getFullYear();

  // const resultadosFiltradosPorAno = dataConFechas.filter(
  //   (item) => item.fecha.getFullYear() === ultimateYear
  // );
  const resultadosFiltradosPorAno = dataConFechas
    .filter((item) => item.fecha.getFullYear() === ultimateYear)
    .sort((a, b) => b.fecha - a.fecha); // Ordena de más reciente a menos reciente

  // Encuentra un mes de alta y uno de baja entre los más recientes
  const mesAlta = resultadosFiltradosPorAno.find(
    (item) => item.cumpleCondiciones
  );
  const mesBaja = resultadosFiltradosPorAno.find(
    (item) => !item.cumpleCondiciones
  );
  const mesesAMostrar = [mesAlta, mesBaja].filter(Boolean);

  // console.log("datos de ultimo year : ");

  // console.log(resultadosFiltradosPorAno);

  // console.log("------------------------------------");

  const months = [
    { value: "01", mounth: "Enero" },
    { value: "02", mounth: "Febrero" },
    { value: "03", mounth: "Marzo" },
    { value: "04", mounth: "Abril" },
    { value: "05", mounth: "Mayo" },
    { value: "06", mounth: "Junio" },
    { value: "07", mounth: "Julio" },
    { value: "08", mounth: "Agosto" },
    { value: "09", mounth: "Septiembre" },
    { value: "10", mounth: "Octubre" },
    { value: "11", mounth: "Noviembre" },
    { value: "12", mounth: "Diciembre" },
  ];

  return (
    <div className="flex-1 ">
      <h3 className="text-lg font-bold mb-2">Meses y Probabilidad</h3>
      <table className="table table-xs w-full ">
        <thead>
          <tr>
            <th className="text-black">Mes</th>
            <th className="text-black">Probabilidad</th>
          </tr>
        </thead>
        <tbody>
          {mesesAMostrar.map((item, index) => {
            const monthName = months[item.fecha.getMonth()].mounth;
            return (
              <tr key={index}>
                <td className="text-black">{monthName}</td>
                <td className="text-black">
                  {item.cumpleCondiciones ? (
                    <p className="bg-green-500 py-1 px-2 rounded-md w-max font-medium">
                      Alta
                    </p>
                  ) : (
                    <p className="bg-red-400 py-1 px-2 rounded-md w-max font-medium">
                      Baja
                    </p>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
