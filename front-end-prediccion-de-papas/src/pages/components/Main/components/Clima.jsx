import { useEffect, useState } from "react";
import axios from "axios";
import Formulario from "../analitics/Formulario";
import Graficas from "../analitics/Graficas";
import Mapa from "../analitics/Mapa";
import { TablaHistorica } from "../analitics/TablaHistorica";
import { TablaRecoverd } from "../analitics/TablaRecoverd";
import climaImage from "../../../../assets/clima.jpg"
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
        console.error("Error al cargar los datos climáticos:", error);
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
      <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden mb-5">
        <img
          src={climaImage}
          alt="Clima y Ecosistema"
          className="w-full md:w-[300px] h-auto object-cover rounded-lg"
        />
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-xl font-bold">Clima y Ecosistema</h2>
          <p className="mt-2 text-gray-700 text-justify">
            El Altiplano boliviano se caracteriza por un clima frío y seco, con
            temperaturas que varían entre -10 °C y 20 °C. Las precipitaciones,
            concentradas entre diciembre y marzo, son escasas, promediando entre
            300 y 500 mm anuales. Las noches extremadamente frías afectan las
            prácticas agrícolas, que deben adaptarse a estas condiciones.
            <br />
            <br />A pesar de las condiciones difíciles, la región cuenta con
            ecosistemas variados, como pastizales de puna y zonas áridas.
            Plantas como el ichu (Stipa ichu) son esenciales para la ganadería
            local. Además, cuerpos de agua como el Lago Titicaca ayudan a
            regular el clima y proveen recursos vitales, permitiendo que la vida
            silvestre y las comunidades agrícolas prosperen en este entorno
            desafiante.
          </p>
        </div>
      </div>

      {/* Sección de Gráficas */}
      <div className="mb-4 h-1/3">
        <div className="divider divider-neutral mb-10 mt-10">
          <h2 className="subtitle text-neutral text-sm md:text-xl lg:text-2xl">
            Gráficas
          </h2>
        </div>
        <Graficas data={climateData} />
      </div>

      {/* Sección de Mapa */}
      <div className="mb-4">
        <div className="divider divider-neutral mb-10 mt-10">
          <h2 className="subtitle text-neutral text-sm md:text-xl lg:text-2xl">
            Mapa
          </h2>
        </div>
        <Mapa />
      </div>

      {/* Seccion de las tablas con paginación */}
      <TablaHistorica data={currentItems}  />
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

      <div className="divider divider-primary mb-10 mt-10">
        <h2 className="subtitle text-primary text-sm md:text-xl lg:text-2xl">
          Predicción
        </h2>
      </div>

      <TablaRecoverd />
      <div className="mb-4">
        <div className="divider divider-secondary mb-10 mt-10">
          <h2 className="subtitle text-secondary text-sm md:text-xl lg:text-2xl">
            Ingreso de datos
          </h2>
        </div>
        <Formulario />
      </div>
    </div>
  );
};

export default Clima;
