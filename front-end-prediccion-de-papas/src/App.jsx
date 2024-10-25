// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import upeaImage from './assets/upea.jpeg';
import backgroundImage from './assets/background.jpg'; // Importa la imagen de fondo
import climaImage from './assets/clima.jpg'; // Asegúrate de importar la imagen de clima
import teoriaImage from './assets/teoria.jpg'; // Asegúrate de importar la imagen de teoria
import economiaImage from './assets/economia.jpg'; // Asegúrate de importar la imagen de economia
import tecnologiaImage from './assets/tecnologia.jpg'; // Asegúrate de importar la imagen de tecnologia

const App = () => {
  const [selectedInfo, setSelectedInfo] = useState("Clima y Ecosistema"); // Muestra "Clima y Ecosistema" al inicio

  const infoData = {
    "Clima y Ecosistema": {
      text: "El clima del Altiplano boliviano es predominantemente frío y seco, clasificado como un clima de alta montaña. Las temperaturas suelen oscilar entre -10 °C y 20 °C dependiendo de la estación, y las precipitaciones son bajas, promediando entre 300 a 500 mm anuales, concentradas principalmente entre diciembre y marzo. Los ecosistemas varían desde pastizales de puna hasta zonas áridas, con vegetación escasa como ichu (Stipa ichu), que es fundamental para la ganadería local. Las temperaturas nocturnas pueden ser extremadamente frías, lo que impacta las prácticas agrícolas tradicionales.",
      image: climaImage,
    },
    "Teoría del cultivo": {
      text: "El cultivo en las regiones altiplánicas requiere técnicas adaptadas a la altitud y al clima frío. La preparación del terreno para la siembra de papa incluye el uso de terrazas y sistemas de andenes para controlar la erosión del suelo y conservar la humedad. Tradicionalmente, los agricultores siguen un calendario agrícola basado en la observación del clima y las estrellas, utilizando rotaciones de cultivos para mantener la fertilidad del suelo. La papa se planta generalmente a principios de la temporada de lluvias, entre octubre y diciembre, cuando las temperaturas son más moderadas.",
      image: teoriaImage,
    },
    "Economía Local": {
      text: "La economía de las regiones altiplánicas está centrada en la agricultura y la ganadería de subsistencia. Los principales cultivos incluyen la papa, quinua y oca, mientras que la cría de llamas y alpacas es esencial para la producción de carne, lana y otros productos. En menor medida, también se practican actividades comerciales y turísticas en áreas cercanas al Lago Titicaca. En la última década, la quinua ha ganado relevancia en los mercados internacionales, proporcionando ingresos adicionales a los agricultores locales.",
      image: economiaImage,
    },
    "Nuevas Tecnologías": {
      text: "En algunas áreas del Altiplano se han implementado sistemas de riego por goteo y tecnologías agroecológicas para optimizar la producción en condiciones de baja disponibilidad de agua. También existen esfuerzos en la región para usar sistemas de información geográfica (SIG) y herramientas de monitoreo climático para mejorar la planificación agrícola y la resistencia al cambio climático.",
      image: tecnologiaImage,
    },
  };

  const handleButtonClick = (info) => {
    setSelectedInfo(info);
  };

  useEffect(() => {
    // Inicializar el texto y la imagen al cargar
    setSelectedInfo("Clima y Ecosistema");
  }, []);

  return (
    <div>
      {/* Sección del Navbar */}
      <Navbar />
      
      {/* Sección de imagen con letra */}
      <div 
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex items-start w-max py-5 px-4">
          {/* Imagen circular (oculta en móviles) */}
          <div className="overflow-hidden rounded-full border-4 border-blue-500 w-20 h-20 md:w-30 md:h-30 hidden md:flex">
            <img 
              src={upeaImage} 
              alt="Upea" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Texto alineado a la izquierda con estilo (oculto en móviles) */}
          <div className="ml-4 text-base text-left mt-2 md:mt-4 hidden md:block">
            <p className="text-white text-shadow">Universidad Pública del Alto</p>
            <p className="text-white text-shadow">Ingeniería en Sistemas</p>
          </div>
        </div>

        {/* Texto en la parte inferior izquierda */}
        <div className="text-white text-4xl md:text-6xl ml-4 font-bold shadow-lg">
          <p className='pb-20 text-shadow tracking-wide'>Pronóstico de Lluvias <br /> en el Altiplano</p>
        </div>
      </div>

      {/* Sección con botones */}
      <div className="py-10 flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl">
          <button 
            className="btn w-full bg-blue-500 text-white hover:bg-blue-700 transition duration-200 h-12 md:h-16" 
            onClick={() => handleButtonClick("Clima y Ecosistema")}
          >
            Clima y Ecosistema
          </button>
          <button 
            className="btn w-full bg-green-500 text-white hover:bg-green-700 transition duration-200 h-12 md:h-16" 
            onClick={() => handleButtonClick("Teoría del cultivo")}
          >
            Teoría del cultivo
          </button>
          <button 
            className="btn w-full bg-purple-500 text-white hover:bg-purple-700 transition duration-200 h-12 md:h-16" 
            onClick={() => handleButtonClick("Economía Local")}
          >
            Economía Local
          </button>
          <button 
            className="btn w-full bg-orange-500 text-white hover:bg-orange-700 transition duration-200 h-12 md:h-16" 
            onClick={() => handleButtonClick("Nuevas Tecnologías")}
          >
            Nuevas Tecnologías
          </button>
        </div>
      </div>

      {/* Sección para mostrar información y imagen seleccionada */}
      <div className="flex justify-center items-center p-6">
        <div className="flex flex-col md:flex-row max-w-5xl bg-white rounded-lg overflow-hidden">
          {/* Imagen */}
          <img 
            src={infoData[selectedInfo].image} 
            alt={selectedInfo} 
            className="w-full md:w-[385px] h-[256px] object-cover rounded-lg" // Tamaño fijo para las imágenes
          />
          {/* Texto */}
          <div className="p-4 flex flex-col justify-between">
            <h2 className="text-xl font-bold">{selectedInfo}</h2>
            <p className="mt-2 text-gray-700 text-justify">{infoData[selectedInfo].text}</p> {/* Texto justificado */}
          </div>
        </div>
      </div>

      {/* Sección final */}
      <div className="bg-gray-100 py-4 text-center">
        <p className="text-gray-700">Final de página</p>
      </div>
    </div>
  );
}

export default App;
