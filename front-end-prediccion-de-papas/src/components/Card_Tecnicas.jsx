import conservacionImage from '../assets/conservacion.jpg';
import { useState, useEffect } from 'react';

const Tecnicas = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar la expansión

  useEffect(() => {
    // Función para manejar el cambio de tamaño de la ventana
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsExpanded(true); // Expande automáticamente en vista de escritorio
      } else {
        setIsExpanded(false); // Comprime en vista móvil
      }
    };

    // Añadir el listener para cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llama a la función una vez para establecer el estado inicial
    handleResize();

    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={`card bg-base-100 image-full w-96 shadow-xl mx-auto mt-6 transition-transform transform hover:scale-105 ${isExpanded ? 'h-[400px]' : 'h-24'}`} // Ajustar altura aquí
      onClick={() => {
        // Cambia el estado solo en dispositivos móviles
        if (window.innerWidth < 768) {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <figure>
        <img 
          src={conservacionImage} 
          alt="Técnicas de Conservación" 
          className="object-cover w-full h-24"
        />
      </figure>
      <div className="card-body">
        <h2 
          className={`card-title text-white font-bold ${isExpanded ? '' : 'cursor-pointer'}`}
        >
          Técnicas de Conservación
        </h2>
        {/* Mostrar el párrafo solo si está expandido */}
        <p className={`mt-2 text-white text-justify ${isExpanded ? 'block' : 'hidden md:block'}`}>
          Las técnicas de conservación tradicionales, como el chuño y la tunta, son importantes en el ciclo agrícola, 
          ya que permiten a los agricultores prolongar la vida útil de la papa y almacenar la producción 
          para su uso durante el año. Estas prácticas se integran en el ciclo agrícola, especialmente 
          después de la cosecha.
        </p>
      </div>
    </div>
  );
}

export default Tecnicas;
