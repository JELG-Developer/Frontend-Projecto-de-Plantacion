import teoriaImage from '../assets/teoria.jpg';

/**
 * Componente que muestra una imagen y un texto explicativo sobre la teoría del cultivo en
 * las regiones altiplánicas.
 *
 * La imagen debe tener un tamaño de al menos 385x256px y ser una imagen de una terraza o
 * andén en una región alta, con plantas de papa creciendo.
 *
 * El texto debe estar formateado como un párrafo con un título en negrita de tamaño 1.5rem,
 * y luego un texto en un párrafo con un tamaño de letra de 1rem y un interlineado de 1.5rem.
 * El texto debe explicar brevemente la teoría del cultivo en las regiones altiplánicas, y
 * mencionar la importancia de la preparación del terreno, el uso de rotaciones de cultivos y
 * la observación del clima y las estrellas para plantar.
 */
const Teoria = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden">
      <img 
        src={teoriaImage} 
        alt="Teoría del cultivo" 
        className="w-full md:w-[385px] h-[256px] object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">Teoría del cultivo</h2>
        <p className="mt-2 text-gray-700 text-justify">
          El cultivo en las regiones altiplánicas requiere técnicas adaptadas a la altitud y al clima frío. La preparación del terreno para la siembra de papa incluye el uso de terrazas y sistemas de andenes para controlar la erosión del suelo y conservar la humedad. Tradicionalmente, los agricultores siguen un calendario agrícola basado en la observación del clima y las estrellas, utilizando rotaciones de cultivos para mantener la fertilidad del suelo. La papa se planta generalmente a principios de la temporada de lluvias, entre octubre y diciembre, cuando las temperaturas son más moderadas.
        </p>
      </div>
    </div>
  );
};

export default Teoria;
