import climaImage from '../assets/clima.jpg';

/**
 * Componente que muestra información sobre el clima y ecosistema del Altiplano boliviano.
 * Incluye una imagen representativa y una descripción textual sobre las características
 * climáticas y ecológicas de la región, destacando las temperaturas extremas, el patrón
 * de precipitaciones y la vegetación típica.
 */
const Clima = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden">
      <img 
        src={climaImage} 
        alt="Clima y Ecosistema" 
        className="w-full md:w-[385px] h-[256px] object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">Clima y Ecosistema</h2>
        <p className="mt-2 text-gray-700 text-justify">
          El clima del Altiplano boliviano es predominantemente frío y seco, clasificado como un clima de alta montaña. Las temperaturas suelen oscilar entre -10 °C y 20 °C dependiendo de la estación, y las precipitaciones son bajas, promediando entre 300 a 500 mm anuales, concentradas principalmente entre diciembre y marzo. Los ecosistemas varían desde pastizales de puna hasta zonas áridas, con vegetación escasa como ichu (Stipa ichu), que es fundamental para la ganadería local. Las temperaturas nocturnas pueden ser extremadamente frías, lo que impacta las prácticas agrícolas tradicionales.
        </p>
      </div>
    </div>
  );
};

export default Clima;
