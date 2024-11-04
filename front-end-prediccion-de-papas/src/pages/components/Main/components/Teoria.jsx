import teoriaImage from "../../../../assets/teoria.jpg";
const Teoria = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden">
      <img
        src={teoriaImage}
        alt="Teoría del cultivo"
        className="w-full md:w-[385px] h-[256px] object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-bold">Teoría del Cultivo</h2>
        <p className="mt-2 text-gray-700 text-justify">
          El cultivo en las regiones altiplánicas requiere técnicas específicas
          adaptadas a la altitud y el clima frío. La preparación del terreno
          para la siembra de papa es clave, usando terrazas y andenes para
          evitar la erosión del suelo y conservar humedad. Estas prácticas
          ayudan a aprovechar las escasas lluvias de la temporada.
          <br />
          <br />
          Tradicionalmente, los agricultores siguen un calendario agrícola
          basado en la observación del clima, las fases lunares y las estrellas,
          esenciales para determinar el momento adecuado para la siembra.
          Además, el uso de rotaciones de cultivos contribuye a mantener la
          fertilidad del suelo, permitiendo que la tierra recupere nutrientes.
          La papa se planta a principios de la temporada de lluvias, entre
          octubre y diciembre, cuando las temperaturas son moderadas y
          favorables.
        </p>
      </div>
    </div>
  );
};

export default Teoria;
