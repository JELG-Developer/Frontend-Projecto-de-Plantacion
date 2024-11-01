import { useState } from 'react';
import Navbar from '../components/Navbar';
import Clima from '../components/Clima';
import Teoria from '../components/Teoria';
import Economia from '../components/Economia';
import Tecnologia from '../components/Tecnologia';
import Card_Ciclo from '../components/Card_Ciclo';
import Card_Papa from '../components/Card_Papa';
import Card_Tecnicas from '../components/Card_Tecnicas';
import Card_Proyecto from '../components/Card_Proyecto';
import Footer from '../components/Footer';
import upeaImage from '../assets/upea.jpeg';
import backgroundImage from '../assets/background.jpg';

/**
 * Componente principal de la aplicación. Contiene la barra de navegación, 
 * el fondo con la imagen de la UPEA y el título del proyecto, y los botones 
 * para seleccionar la información a mostrar.
 * 
 * @returns {React.ReactElement} 
 */
const Hero = () => {
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
      <Navbar />
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
        <div className="text-white text-4xl md:text-6xl ml-4 font-bold">
          <p className='pb-20 text-shadow tracking-wide'>Pronóstico de Lluvias <br /> en el Altiplano</p>
        </div>
      </div>

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
      <div className="flex justify-center items-center p-6">
        {renderSelectedComponent()}
      </div>

      {/* Nueva Sección de Ciclo, Papa, Técnicas y Proyecto */}
      <div className="flex flex-col items-center">
        <div className="divider divider-neutral mb-6">
          <h2 className="subtitle text-sm md:text-xl lg:text-2xl">Últimas Funciones</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-5xl">
          <div className="mb-4"> {/* Ciclo */}
            <Card_Ciclo />
          </div>
          <div className="mb-4"> {/* Papa */}
            <Card_Papa />
          </div>
          <div className="mb-4"> {/* Técnicas */}
            <Card_Tecnicas />
          </div>
          <div className="mb-4"> {/* Proyecto de Desarrollo Agrícola */}
            <Card_Proyecto />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Hero;
