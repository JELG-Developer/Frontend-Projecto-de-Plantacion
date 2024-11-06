import React, { useState } from "react";
import { PostPrediccion } from "./helpers/PostPrediccion";
import { DownloadPDF } from "./helpers/DownloadPDF";
import { TablePrediction } from "./components/TablePrediction";
import { CalculateProbability } from "../Map/helpers/CalculateProbability";
import { TableMonths } from "./components/TableMonths";
import GraficsPrediccion from "./components/GraficsPrediccion";
export const ContainerPrediction = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [climateData, setClimateData] = useState([]);
  const [historialFiltrado, setHistorialFiltrado] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePrediccion = async () => {
    const predictionResult = parseInt(inputValue);
    setLoading(true);

    const res = await PostPrediccion({ prediccion: predictionResult });

    const FilteredData = await CalculateProbability(res.data);

    const uniqueNames = Array.from(
      new Set(res.data.map((item) => item.estacion))
    );

    const estacionesConHistorial = uniqueNames.map((nombre) => {
      const historial = FilteredData.filter((item) => item.estacion === nombre);
      return [nombre, historial];
    });
    console.log(estacionesConHistorial);
    setHistorialFiltrado(estacionesConHistorial);

    if (res != null || res != undefined) {
      setLoading(false);
      setClimateData(res.data);
    }
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
      <div className="flex gap-2 items-center">
        <p>¿Cuántos meses debo predecir?</p>
        <input
          type="number"
          className="grow text-right max-w-20 bg-base-200 p-2 rounded-md"
          min={1}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="focus:outline-none bg-sky-500 p-2"
          onClick={handlePrediccion}
        >
          Predecir
        </button>
        <DownloadPDF climateData={climateData} />
      </div>
      {/* aca se renderiza el compoennte */}
      <TablePrediction climateData={climateData} />
      <div className="grid grid-cols-2">
        {historialFiltrado.map(([nombre, historial], index) => (
          <div key={index}>
            <TableMonths dataMeses={historial} nombre={nombre} />
          </div>
        ))}
      </div>
      {/* aca podemos mapear tambien la grafica para cada estacion  */}
      {historialFiltrado && historialFiltrado.length > 0 ? (
        <GraficsPrediccion data={climateData} />
      ) : (
        ""
      )}
    </div>
  );
};
