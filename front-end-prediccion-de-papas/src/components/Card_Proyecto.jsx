import { useState, useEffect } from 'react';
import proyectoImage from '../assets/proyecto.jpg'; // Asegúrate de tener una imagen adecuada para este proyecto

const ProyectoDesarrolloAgricola = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión

  useEffect(() => {
    const handleResize = () => {
      // Expande automáticamente en vista de escritorio
      setIsExpanded(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a la función una vez para establecer el estado inicial

    return () => window.removeEventListener('resize', handleResize); // Limpiar el listener al desmontar el componente
  }, []);

  const handleCardClick = () => {
    // Cambia el estado solo en dispositivos móviles
    if (window.innerWidth < 768) {
      setIsExpanded(prevState => !prevState);
    }
  };

  return (
    <div 
      className={`card bg-base-100 image-full w-96 shadow-xl mx-auto mt-6 transition-transform transform hover:scale-105 ${isExpanded ? 'h-[400px]' : 'h-24'}`} 
      onClick={handleCardClick}
    >
      <figure>
        <img 
          src={proyectoImage} 
          alt="Proyecto de Desarrollo Agrícola" 
          className="object-cover w-full h-24"
        />
      </figure>
      <div className="card-body">
        <h2 
          className={`card-title text-white font-bold ${isExpanded ? '' : 'cursor-pointer'}`}
        >
          Proyectos de Desarrollo Agrícola
        </h2>
        {/* Mostrar el párrafo solo si está expandido */}
        <p className={`mt-2 text-white text-justify ${isExpanded ? 'block' : 'hidden md:block'}`}>
          Un ejemplo de proyecto que podría adaptarse a la región es el desarrollo agrícola basado en la resiliencia al cambio climático, 
          como el proyecto PACC (Programa de Adaptación al Cambio Climático) en Perú. Este proyecto ha ayudado a los agricultores a 
          implementar prácticas sostenibles y mejorar la gestión del agua en zonas de alta montaña.
        </p>
      </div>
    </div>
  );
};

export default ProyectoDesarrolloAgricola;
