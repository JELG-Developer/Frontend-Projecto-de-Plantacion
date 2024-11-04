import economiaImage from '../../../../assets/economia.jpg';
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
          La economía de las regiones altiplánicas se centra en la agricultura y la ganadería de subsistencia. Los cultivos principales son papa, quinua y oca, mientras que la cría de llamas y alpacas es vital para la producción de carne y lana. Las actividades comerciales son menores, pero la cercanía al Lago Titicaca favorece el turismo, generando ingresos adicionales.
        </p>
        <p className="mt-2 text-gray-700 text-justify">
          A lo largo de la última década, la quinua ha ganado gran relevancia en los mercados internacionales, ofreciendo nuevas oportunidades a los agricultores locales. Esta expansión ha permitido a muchas familias mejorar sus condiciones de vida. Sin embargo, los desafíos como el cambio climático y la escasez de agua continúan afectando la producción. Por ello, es crucial implementar prácticas sostenibles para asegurar el futuro económico de estas comunidades.
        </p>
      </div>
    </div>
  );
};

export default Economia;
