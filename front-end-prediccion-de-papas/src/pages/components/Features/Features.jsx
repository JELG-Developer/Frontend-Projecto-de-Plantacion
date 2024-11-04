import React from "react";
import Ciclo from "./components/Card_Ciclo";
import Papa from "./components/Card_Papa";
import Proyecto from "./components/Card_Proyecto";
import Tecnicas from "./components/Card_Tecnicas";
export const Features = () => {
  return (
    <div className="mb-4">
      {/* Nueva Sección de Ciclo, Papa, Técnicas y Proyecto */}
      <div className="flex flex-col items-center">
        <div className="divider divider-neutral mb-6">
          <h2 className="subtitle text-sm md:text-xl lg:text-2xl">
            Últimas Funciones
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl">
          <Ciclo />
          <Papa />
          <Tecnicas />
          <Proyecto />
        </div>
      </div>
    </div>
  );
};
