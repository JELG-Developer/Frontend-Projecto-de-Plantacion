import React, { useState } from "react";
import Clima from "./components/Clima/Clima";
import Teoria from "./components/Teoria";
import Economia from "./components/Economia";
import Tecnologia from "./components/Tecnologia";

export const Main = () => {
  const [selectedInfo, setSelectedInfo] = useState("Clima");

  const renderSelectedComponent = () => {
    switch (selectedInfo) {
      case "Clima":
        return <Clima />;
      case "Teoria":
        return <Teoria />;
      case "Economia":
        return <Economia />;
      case "Tecnologia":
        return <Tecnologia />;
      default:
        return <Clima />;
    }
  };
  return (
    <div>
      <div className="py-10 flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl">
          <button
            className="btn w-full bg-blue-500 text-white hover:bg-blue-700 transition duration-200 h-12 md:h-16"
            onClick={() => setSelectedInfo("Clima")}
          >
            Clima y Ecosistema
          </button>
          <button
            className="btn w-full bg-green-500 text-white hover:bg-green-700 transition duration-200 h-12 md:h-16"
            onClick={() => setSelectedInfo("Teoria")}
          >
            Teoría del cultivo
          </button>
          <button
            className="btn w-full bg-purple-500 text-white hover:bg-purple-700 transition duration-200 h-12 md:h-16"
            onClick={() => setSelectedInfo("Economia")}
          >
            Economía Local
          </button>
          <button
            className="btn w-full bg-orange-500 text-white hover:bg-orange-700 transition duration-200 h-12 md:h-16"
            onClick={() => setSelectedInfo("Tecnologia")}
          >
            Nuevas Tecnologías
          </button>
        </div>
      </div>

      {/* Sección para mostrar información seleccionada */}
      <div>
        {renderSelectedComponent()}
      </div>
    </div>
  );
};
