import teoriaImage from "../../../../assets/Altiplano2.png";
import Imagen2 from "../../../../assets/Altiplano3.png";
import Imagen3 from "../../../../assets/Altiplano4.png";

import Imagen4 from "../../../../assets/Altiplano5.png";

import Imagen5 from "../../../../assets/Altiplano6.png";
const Teoria = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden p-4">
      <section className="flex flex-col gap-8">
        <div className="px-4 grid grid-cols-2 gap-4  ">
          <img
            src={teoriaImage}
            alt="Teoría del cultivo"
            className="max-md:object-cover rounded-lg object-center "
          />
          <div>
            <h2 className="text-2xl font-bold">Teoría del Cultivo</h2>
            <p className=" text-lg mt-2 text-gray-700 text-justify">
              La teoría de siembra de papa en el altiplano boliviano examina los
              factores ambientales, climáticos y socioeconómicos que determinan
              las prácticas agrícolas en esta región única. <br /> El altiplano,
              con su altitud promedio de 3,800 metros sobre el nivel del mar y
              un clima extremo, ofrece desafíos y oportunidades específicas para
              el cultivo de papa, uno de los alimentos básicos más importantes
              en Bolivia. <br /> Esta teoría no solo abarca los conocimientos
              ancestrales de las comunidades locales, sino que también integra
              métodos científicos y tecnológicos modernos para optimizar las
              prácticas de siembra.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="">
            <h6 className="text-2xl font-bold py-3 ">
              Factores Climaticos y Estacionales
            </h6>
            <p className="text-lg">
              En el altiplano paceño, el clima es impredecible y suele presentar
              grandes variaciones estacionales, con inviernos fríos y veranos
              relativamente secos. Las heladas, la sequía y el granizo son
              fenómenos frecuentes que pueden dañar las cosechas. La teoría de
              siembra de papa en esta región sugiere adaptar los tiempos de
              siembra para evitar los períodos más críticos. Por ejemplo, se
              recomienda la siembra antes o después de las heladas, utilizando
              sistemas de monitoreo meteorológico que anticipen el clima.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={Imagen2}
              alt="Teoría del cultivo"
              className="max-md:object-cover rounded-lg object-center "
            />
          </div>
        </div>
        {/* seccion 3  */}
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <div className="">
              <h6 className="text-2xl font-bold py-3 ">
                MÉTODO DE PREPARACIÓN Y SIEMBRA DE PAPA.
              </h6>
              <p className="text-lg">
                Preparación y Pasos para la Siembra de Papa
              </p>
              <ul className="text-lg pl-8 ">
                <li>
                  <strong>1.Selección de Semilla:</strong> Escoge variedades de
                  papa adaptadas a la región y que sean resistentes a
                  enfermedades.Asegúrate de que las semillas sean de calidad,
                  sanas y sin daños.
                </li>
                <li>
                  <strong>2.Preparación del Suelo:</strong> <br /> Limpieza:
                  Retira las malas hierbas, restos de cultivos anteriores y
                  piedras. <br /> Labranza: Realiza una labranza profunda para
                  airear el suelo y mejorar la estructura. Puedes usar un arado
                  o una azada. <br /> Fertilización: Aplica fertilizantes
                  orgánicos (como estiércol) o químicos según el análisis de
                  suelo. Los nutrientes más importantes son nitrógeno, fósforo y
                  potasio.
                </li>
              </ul>
            </div>
            <img
              src={Imagen3}
              alt="Teoría del cultivo"
              className=" max-h-[400px] max-md:object-cover rounded-lg object-center scale-90 "
            />
          </div>
          <div className="grid grid-cols-2 ">
            <ul className="text-lg pl-8 ">
              <li>
                <strong>3.Condiciones Ambientales:</strong> Verifica las
                condiciones climáticas. La papa crece mejor en temperaturas
                entre 15 y 20 °C. Asegúrate de que el suelo tenga un buen
                drenaje para evitar el encharcamiento.
              </li>
              <li>
                <strong>4.Corte de Semillas:</strong> Si las semillas son
                grandes, puedes cortarlas en trozos de unos 50-100 gramos,
                asegurándote de que cada trozo tenga al menos un “ojo” o yema.
              </li>
              <li>
                <strong>5.Siembra:</strong> <br /> Fecha de siembra: Elige la época
                adecuada según las condiciones climáticas y la variedad de papa.{" "}
                <br />
                Profundidad: Siembra los trozos de papa a una profundidad de
                10-15 cm. <br /> Distancia: Mantén una separación de 30-40 cm
                entre cada planta y 75-90 cm entre filas.
              </li>
            </ul>

            <img
              src={Imagen4}
              alt="Teoría del cultivo"
              className=" max-h-[400px] w-[90%] object-cover rounded-lg object-center scale-90 "
            />
          </div>
          <div className="grid grid-cols-2 ">
            <ul className="text-lg pl-8 ">
              <li>
                <strong>6.Cuidados Post-Siembra:</strong> Deshierbe: Realiza
                deshierbes periódicos para evitar la competencia con otras
                plantas. <br /> Fertilización adicional: Aplica fertilizantes en
                la etapa de crecimiento activo, generalmente 3-4 semanas después
                de la siembra.
              </li>
              <li>
                <strong>7.Control de Plagas y Enfermedades:</strong> Monitorea
                regularmente el cultivo para detectar plagas y enfermedades. Usa
                métodos de control biológico o químico cuando sea necesario.{" "}
                <br /> Mantén una rotación de cultivos para prevenir la
                acumulación de enfermedades en el suelo.
              </li>
              <li>
                <strong>8.Cosecha: </strong>La cosecha se realiza cuando las
                hojas de la planta comienzan a amarillear y morir. Esto suele
                ocurrir entre 90 y 120 días después de la siembra, dependiendo
                de la variedad. <br />
                Usa una pala o azada para levantar las papas del suelo con
                cuidado de no dañarlas.
              </li>
            </ul>

            <img
              src={Imagen5}
              alt="Teoría del cultivo"
              className=" max-h-[400px] w-[90%] object-cover rounded-lg object-center scale-90 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teoria;
