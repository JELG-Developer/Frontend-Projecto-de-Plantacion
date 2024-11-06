import economiaImage from "../../../../assets/economia.jpg";

import Imagen7 from "../../../../assets/Altiplano8.png";
const Economia = () => {
  return (
    <div className=" max-w-7xl bg-white rounded-lg overflow-hidden">
      <div className="p-8" >
        <img
          src={Imagen7}
          alt="Economía Local"
          className="w-full max-h-[500px]  object-cover rounded-lg"
        />
      </div>
      <div className="p-4 text-lg  flex flex-col justify-between">
        <h2 className="text-2xl font-bold">Economía Local</h2>
        <p className="mt-2 text-gray-700 text-justify">
          La economía local en las comunidades altiplánicas de La Paz, Bolivia,
          depende en gran medida de la agricultura, siendo la papa uno de los
          cultivos fundamentales. Este tubérculo, adaptado a las duras
          condiciones climáticas de la región, no solo es un alimento básico
          para el consumo interno, sino que también representa una fuente de
          ingresos para muchas familias campesinas. <br /> La papa se siembra en
          terrenos de altitud elevada, donde las comunidades aprovechan las
          características agroecológicas propias del altiplano, como las bajas
          temperaturas y el suelo fértil, aunque estas también imponen desafíos
          significativos. <br />
          En este contexto, la siembra de papa contribuye de manera importante a
          la economía local. Los agricultores suelen cultivar diversas
          variedades autóctonas de papa, que son valoradas por su resistencia y
          por sus cualidades organolépticas. Sin embargo, factores climáticos
          como heladas, granizadas y sequías pueden reducir los rendimientos y,
          por ende, los ingresos de los productores, afectando la estabilidad
          económica de estas comunidades.
        </p>
        <p className="mt-2 text-gray-700 text-justify">
          El mercado de papa en el altiplano depende tanto del comercio local
          como de la venta en ciudades cercanas, y es una actividad que genera
          empleo en diversas etapas de la producción, desde la siembra hasta la
          cosecha y el transporte. Los ingresos generados por la venta de papa
          ayudan a cubrir necesidades básicas y a mejorar la calidad de vida de
          los habitantes de estas comunidades. <br /> Aun así, la dependencia de
          condiciones climáticas impredecibles hace que los agricultores busquen
          alternativas para optimizar la producción, como el uso de tecnologías
          agrícolas, Sistemas de Información Geográfica (SIG) y mejores
          prácticas de manejo del cultivo.
        </p>
      </div>
    </div>
  );
};

export default Economia;
