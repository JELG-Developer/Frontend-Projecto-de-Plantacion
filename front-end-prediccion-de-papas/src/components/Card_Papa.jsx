import papaImage from '../assets/papa.jpg'; // Asegúrate de tener una imagen para el componente
import { useState, useEffect } from 'react';

const Papa = () => {
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
      className={`card bg-base-100 image-full w-96 shadow-xl mx-auto mt-6 transition-transform transform hover:scale-105 ${isExpanded ? 'h-auto' : 'h-24'}`} // Ajustar altura aquí
      onClick={() => {
        // Cambia el estado solo en dispositivos móviles
        if (window.innerWidth < 768) {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <figure>
        <img 
          src={papaImage} 
          alt="Variedades de Papa" 
          className="object-cover w-full h-24"
        />
      </figure>
      <div className="card-body">
        <h2 
          className={`card-title text-white font-bold ${isExpanded ? '' : 'cursor-pointer'}`}
        >
          Variedades de Papa
        </h2>
        {/* Mostrar el párrafo solo si está expandido */}
        <p className={`mt-2 text-white text-justify ${isExpanded ? 'block' : 'hidden md:block'}`}>
          El Altiplano boliviano alberga una gran diversidad de papa, con más de 200 variedades nativas cultivadas.:
          <ul className="list-disc ml-5 mt-2">
            <li><strong>Imilla negra:</strong> Una papa de pulpa blanca y cáscara oscura, resistente a climas fríos.</li>
            <li><strong>Waych’a:</strong> Muy popular en las alturas por su resistencia a la helada.</li>
            <li><strong>Qhatiña:</strong> Especialmente utilizada para la producción de chuño.</li>
            <li><strong>Ajawiri:</strong> Adaptada a las condiciones áridas del altiplano.</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Papa;
