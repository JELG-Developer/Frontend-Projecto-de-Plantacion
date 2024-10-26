import cicloImage from '../assets/ciclo.jpg';
import { useState, useEffect } from 'react';

const Ciclo = () => {
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
          src={cicloImage} 
          alt="Ciclo Agrícola" 
          className="object-cover w-full h-24"
        />
      </figure>
      <div className="card-body">
        <h2 
          className={`card-title text-white font-bold ${isExpanded ? '' : 'cursor-pointer'}`}
        >
          Ciclo Agrícola
        </h2>
        {/* Mostrar el párrafo solo si está expandido */}
        <p className={`mt-2 text-white text-justify ${isExpanded ? 'block' : 'hidden md:block'}`}>
          El ciclo de cultivo de la papa en las regiones altiplánicas sigue los patrones estacionales. 
          La siembra generalmente se realiza durante los meses de lluvias, entre octubre y diciembre, 
          y la cosecha se lleva a cabo entre marzo y abril. Las bajas temperaturas nocturnas pueden 
          limitar el desarrollo del cultivo, por lo que se seleccionan variedades resistentes a las 
          heladas y se practican técnicas como el uso de mulching para proteger los brotes.
        </p>
      </div>
    </div>
  );
}

export default Ciclo;
