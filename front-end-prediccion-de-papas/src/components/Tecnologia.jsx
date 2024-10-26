import tecnologiaImage from '../assets/tecnologia.jpg';

/**
 * Componente que muestra una imagen y un texto sobre nuevas tecnologías en el Altiplano.
 * 
 * La imagen es un ejemplo de tecnologías agroecológicas implementadas en el Altiplano.
 * El texto menciona la implementación de sistemas de riego por goteo y SIG para mejorar la planificación
 * agrícola y la resistencia al cambio climático en la región.
 */
const Tecnologia = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden">
      <img 
        src={tecnologiaImage} 
        alt="Nuevas Tecnologías" 
        className="w-full md:w-[385px] h-[256px] object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">Nuevas Tecnologías</h2>
        <p className="mt-2 text-gray-700 text-justify">
          En algunas áreas del Altiplano se han implementado sistemas de riego por goteo y tecnologías agroecológicas para optimizar la producción en condiciones de baja disponibilidad de agua. También existen esfuerzos en la región para usar sistemas de información geográfica (SIG) y herramientas de monitoreo climático para mejorar la planificación agrícola y la resistencia al cambio climático.
        </p>
      </div>
    </div>
  );
};

export default Tecnologia;
