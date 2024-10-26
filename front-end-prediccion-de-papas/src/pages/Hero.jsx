import { useState } from 'react';
import Navbar from '../components/Navbar';
import Clima from '../components/Clima';
import Teoria from '../components/Teoria';
import Economia from '../components/Economia';
import Tecnologia from '../components/Tecnologia';
import Footer from '../components/Footer';
import upeaImage from '../assets/upea.jpeg';
import backgroundImage from '../assets/background.jpg';

/**
 * Página de inicio de la aplicación. Contiene la barra de navegación, 
 * el fondo con la imagen de la UPEA y el título del proyecto, y los botones 
 * para seleccionar la información a mostrar.
 * 
 * @returns {React.ReactElement} 
 */
const Hero = () => {
  const [selectedInfo, setSelectedInfo] = useState("Clima");

  /**
   * Renderiza el componente seleccionado por el usuario.
   * 
   * El valor de `selectedInfo` determina qué componente se renderiza. Si
   * el valor no coincide con ninguno de los casos conocidos, se muestra el
   * componente `Clima` por defecto.
   * 
   * @returns {React.ReactElement} Componente seleccionado.
   */
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
      {/* Navbar */}
      <Navbar />

      {/* Sección Hero con fondo de imagen */}
      <div 
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex items-start w-max py-5 px-4">
          <div className="overflow-hidden rounded-full border-4 border-blue-500 w-20 h-20 md:w-30 md:h-30 hidden md:flex">
            <img 
              src={upeaImage} 
              alt="Upea" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="ml-4 text-base text-left mt-2 md:mt-4 hidden md:block">
            <p className="text-white text-shadow">Universidad Pública del Alto</p>
            <p className="text-white text-shadow">Ingeniería en Sistemas</p>
          </div>
        </div>
        <div className="text-white text-4xl md:text-6xl ml-4 font-bold shadow-lg">
          <p className='pb-20 text-shadow tracking-wide'>Pronóstico de Lluvias <br /> en el Altiplano</p>
        </div>
      </div>

      {/* Botones de selección de información */}
      <div className="py-10 gap-4 md:flex md:justify-around md:flex-row">
        <button 
          className="btn  bg-blue-500 text-white hover:bg-blue-700 transition duration-200 h-12 " 
          onClick={() => setSelectedInfo("Clima")}
        >
          Clima y Ecosistema
        </button>
        <button 
          className="btn  bg-green-500 text-white hover:bg-green-700 transition duration-200 h-12 " 
          onClick={() => setSelectedInfo("Teoria")}
        >
          Teoría del cultivo
        </button>
        <button 
          className="btn  bg-purple-500 text-white hover:bg-purple-700 transition duration-200 h-12 " 
          onClick={() => setSelectedInfo("Economia")}
        >
          Economía Local
        </button>
        <button 
          className="btn  bg-orange-500 text-white hover:bg-orange-700 transition duration-200 h-12 " 
          onClick={() => setSelectedInfo("Tecnologia")}
        >
          Nuevas Tecnologías
        </button>
      </div>

      {/* Componente seleccionado */}
      <div className="flex justify-center items-center p-6">
        {renderSelectedComponent()}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Hero;
