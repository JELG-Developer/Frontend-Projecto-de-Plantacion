import { useEffect, useState } from "react";
import axios from "axios";
import { EstacionGPS } from "./helpers/EstationGPS";
import { CalculateProbability } from "./helpers/CalculateProbability";
// Componente Principal
export const ContainerMap = () => {
  const [estacionesData, setEstacionesData] = useState([]);

  useEffect(() => {
    const fetchEstacionesData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        const res =await CalculateProbability(response.data);
        const uniqueNames = Array.from(
          new Set(res.map((item) => item.estacion))
        );
        const estacionesConHistorial = uniqueNames.map((nombre) => {
          const historial = res.filter((item) => item.estacion === nombre);
          return [nombre, historial];
        });
        setEstacionesData(estacionesConHistorial);
        // console.log("Nombres únicos de estaciones:", uniqueNames);
        // console.log("Variable que filtra:", estacionesConHistorial);
      } catch (error) {
        console.error("Error al cargar los datos de estaciones:", error);
      }
    };

    fetchEstacionesData();
  }, []);

  return (
    <div>
      <div className="divider divider-neutral mb-10 mt-10">
        <h2 className="subtitle text-neutral text-sm md:text-xl lg:text-2xl">
          Mapa
        </h2>
      </div>
      <div className="">
        {estacionesData.map(([nombre, historial], index) => (
          <EstacionGPS
            key={index}
            nombre={nombre}
            coordenadas={{
              latitud: historial[0].latitud,
              longitud: historial[0].longitud,
            }}
            historial={historial}
          />
        ))}
      </div>
    </div>
  );
};
