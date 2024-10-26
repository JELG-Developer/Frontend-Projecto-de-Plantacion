import economiaImage from '../assets/economia.jpg';

/**
 * Componente que muestra una imagen y un texto que describe la economía local
 * de las regiones altiplánicas.
 *
 * @returns {JSX.Element} Componente que muestra la economía local.
 */
const Economia = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden">
      <img 
        src={economiaImage} 
        alt="Economía Local" 
        className="w-full md:w-[385px] h-[256px] object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">Economía Local</h2>
        <p className="mt-2 text-gray-700 text-justify">
        La economía de las regiones altiplánicas está centrada en la agricultura y la ganadería de subsistencia. Los principales cultivos incluyen la papa, quinua y oca, mientras que la cría de llamas y alpacas es esencial para la producción de carne, lana y otros productos. En menor medida, también se practican actividades comerciales y turísticas en áreas cercanas al Lago Titicaca. En la última década, la quinua ha ganado relevancia en los mercados internacionales, proporcionando ingresos adicionales a los agricultores locales.
        </p>
      </div>
    </div>
  );
};

export default Economia;
