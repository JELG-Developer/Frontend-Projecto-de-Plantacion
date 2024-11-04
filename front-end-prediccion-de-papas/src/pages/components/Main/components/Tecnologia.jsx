import tecnologiaImage from '../../../../assets/tecnologia.jpg';
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
          En diversas áreas del Altiplano se han implementado innovadores sistemas de riego por goteo y tecnologías agroecológicas que buscan optimizar la producción agrícola en condiciones de baja disponibilidad de agua. Estas tecnologías no solo ayudan a conservar este recurso vital, sino que también permiten a los agricultores maximizar la eficiencia de sus cultivos y mejorar la calidad de los productos que ofrecen al mercado local.
        </p>
        <p className="mt-2 text-gray-700 text-justify">
          Además, se están realizando esfuerzos en la región para utilizar sistemas de información geográfica (SIG) y herramientas avanzadas de monitoreo climático que mejoran significativamente la planificación agrícola. Estas tecnologías permiten a los agricultores anticipar condiciones climáticas adversas, optimizando la siembra y cosecha. Esto resulta esencial para la resiliencia ante el cambio climático, permitiendo a las comunidades adaptarse mejor y asegurar sus fuentes de ingresos.
        </p>
      </div>
    </div>
  );
};

export default Tecnologia;
