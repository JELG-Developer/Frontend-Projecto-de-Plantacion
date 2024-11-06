import { useEffect, useState } from "react";
import axios from "axios";
import altiplanoPrediccion from "../../../../../assets/Altiplano.png";
import Grafics from "./components/Grafics";
import { ContainerMap } from "./components/Map/ContainerMap";
import { TablaHistorics } from "./components/TableHistoric";
import { ContainerPrediction } from "./components/TablePrediction/ContainerPrediction";
const Clima = () => {
  const [climateData, setClimateData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cambiar este valor según sea necesario

  useEffect(() => {
    const fetchClimateData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        setClimateData(response.data);
      } catch (error) {
        // console.error("Error al cargar los datos climáticos:", error);
      }
    };

    fetchClimateData();
  }, []);

  // Calcular total de páginas
  const totalPages = Math.ceil(climateData.length / itemsPerPage);

  // Obtener los elementos actuales para la página actual
  const currentItems = climateData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cambiar de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-2 bg-white rounded-lg overflow-hidden mb-5">
        <div className="flex justify-center items-center" >
          <img
            src={altiplanoPrediccion}
            alt="Clima y Ecosistema"
            className="w-full  h-auto  object-center rounded-lg max-md:object-cover "
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-xl font-bold">Prediccion de siembra</h2>
          <p className="mt-2 text-gray-700 text-justify">
            La predicción del clima en las comunidades altiplánicas de La Paz se
            centra en anticipar las condiciones meteorológicas en regiones de
            altura considerable, como los Andes, donde factores como la
            variación estacional, la altitud y la geografía impactan
            notablemente en el clima. Dado que estas comunidades dependen de la
            agricultura, una predicción climática precisa es esencial para
            planificar actividades agrícolas, especialmente en cultivos como la
            papa, que es sensible a las heladas y sequías. <br /> El proceso de
            predicción se basa en la recopilación de datos meteorológicos
            históricos y en tiempo real (como temperatura, humedad,
            precipitaciones y radiación solar) mediante sensores y estaciones
            climáticas. <br /> Estos datos son procesados y analizados mediante
            algoritmos de aprendizaje automático o modelos matemáticos, que
            pueden identificar patrones y realizar proyecciones para días,
            semanas o meses.
          </p>
        </div>
      </div>
      {/* Sección de Gráficas */}
      <Grafics data={climateData} />  
      {/* Sección de Mapa */}
      <ContainerMap />

      <TablaHistorics data={currentItems} />
      <div className="mb-4  w-auto ">
        <div className="flex  justify-center mt-4">
          <div className="join flex flex-wrap gap-1">
            {[...Array(totalPages)].map((_, index) => (
              <input
                key={index}
                className="join-item btn btn-sm"
                type="radio"
                name="options"
                id={`page-${index + 1}`}
                aria-label={`${index + 1}`}
                checked={currentPage === index + 1}
                onChange={() => handlePageChange(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      <ContainerPrediction />
      {/* <TablaRecoverd /> */}
      {/* <div className="mb-4">
        <div className="divider divider-secondary mb-10 mt-10">
          <h2 className="subtitle text-secondary text-sm md:text-xl lg:text-2xl">
            Ingreso de datos
          </h2>
        </div>
        <Formulario />
      </div> */}
    </div>
  );
};

export default Clima;
