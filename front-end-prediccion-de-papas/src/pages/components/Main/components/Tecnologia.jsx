import tecnologiaImage from "../../../../assets/Altiplano9.png";
import tecnologiaImage2 from "../../../../assets/Altiplano10.png";
const Tecnologia = () => {
  return (
    <div className="max-w-7xl bg-white rounded-lg overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-2xl font-bold">Nuevas Tecnologías</h2>
          <p className="mt-2 text-lg text-gray-700 text-justify">
            La introducción de nuevas tecnologías en la siembra de papa en las
            comunidades altiplánicas de La Paz está transformando la agricultura
            en la región, mejorando tanto la productividad como la resiliencia
            frente a las condiciones climáticas adversas. En estas comunidades,
            el cultivo de papa es una actividad tradicional que ha formado parte
            de la economía local por siglos. Sin embargo, los desafíos derivados
            de los cambios climáticos, como heladas, granizo y períodos de
            sequía, han llevado a los agricultores a buscar nuevas soluciones
            tecnológicas que complementen sus conocimientos ancestrales.
          </p>
          <p className="mt-2 text-lg text-gray-700 text-justify">
            Una de las innovaciones clave en el altiplano es la implementación
            de Sistemas de Información Geográfica (SIG) y la teledetección, que
            permiten monitorear las condiciones climáticas y del suelo en tiempo
            real. Con estas herramientas, los agricultores pueden acceder a
            datos meteorológicos precisos que les ayudan a determinar el mejor
            momento para sembrar y cosechar. En regiones de gran altitud, donde
            los microclimas pueden variar drásticamente en cuestión de
            kilómetros, esta información es fundamental para optimizar el uso
            del agua y de los recursos agrícolas, mejorando la eficiencia en el
            cultivo de la papa.
          </p>
        </div>
        <div className="p-8  flex justify-center items-center  ">
          <img
            src={tecnologiaImage}
            alt="Nuevas Tecnologías"
            className="w-full  object-center  object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <p className="text-lg p-4 ">
          Además, el uso de sensores en campo para medir variables como la
          humedad del suelo y la temperatura permite a los agricultores adaptar
          sus prácticas de riego y fertilización en función de las necesidades
          específicas de las plantas. <br /> Esto resulta particularmente útil
          en comunidades con acceso limitado al agua, ya que ayuda a conservar
          este recurso esencial y a mantener el cultivo saludable, reduciendo
          las pérdidas y maximizando los rendimientos. <br /> En combinación con
          drones, que brindan imágenes detalladas de los cultivos, los
          agricultores pueden detectar tempranamente problemas como enfermedades
          o plagas, mejorando la respuesta y disminuyendo la necesidad de
          pesticidas. <br /> La adopción de variedades de papa mejoradas y
          adaptadas genéticamente a las condiciones del altiplano es otra
          práctica tecnológica que está ganando popularidad. Estas variedades
          son más resistentes a las heladas y a las enfermedades, lo que
          contribuye a estabilizar la producción y proteger los ingresos de las
          familias campesinas. <br /> A través de programas de capacitación, los
          agricultores también aprenden a combinar estas nuevas variedades con
          sus técnicas de cultivo tradicionales, creando sistemas agrícolas que
          integran conocimientos modernos y saberes ancestrales. <br /> Las
          tecnologías digitales, como aplicaciones móviles que brindan asesoría
          técnica y recomendaciones personalizadas, también están comenzando a
          hacer su aparición en el altiplano. <br /> Aunque el acceso a internet
          es limitado en algunas comunidades, estos recursos se están adaptando
          para que puedan funcionar sin conexión, lo que permite que la
          tecnología sea accesible para más agricultores. <br /> Estas
          aplicaciones ofrecen información sobre el manejo de plagas, las
          condiciones meteorológicas y las prácticas de rotación de cultivos, lo
          que empodera a los agricultores para tomar decisiones informadas y
          reducir la dependencia de intermediarios. <br /> La maquinaria
          agrícola de pequeña escala, como las sembradoras y cosechadoras
          especializadas en terrenos inclinados, también facilita el trabajo en
          los campos de papa. En las zonas montañosas, donde las pendientes
          dificultan el uso de maquinaria tradicional, estas herramientas
          adecuadas al terreno mejoran la eficiencia sin dañar el suelo,
          contribuyendo a la sostenibilidad a largo plazo del cultivo de papa.
        </p>
        <div className="p-8  flex justify-center items-center  ">
          <img
            src={tecnologiaImage2}
            alt="Nuevas Tecnologías"
            className="w-full  object-center  object-cover rounded-lg"
          />
        </div>
      </div>
      <p className="text-lg p-4" >
        Finalmente, el uso de análisis de datos y aprendizaje automático para
        predecir patrones climáticos y optimizar la planificación de cultivos es
        una tecnología emergente en la región. Al integrar datos históricos con
        modelos predictivos, los agricultores pueden prever cambios en el clima
        y ajustar sus planes de siembra en consecuencia, minimizando los riesgos
        y aumentando las probabilidades de una buena cosecha. <br />  En resumen, la
        incorporación de tecnologías avanzadas en la siembra de papa en las
        comunidades altiplánicas de La Paz representa una transformación
        importante en el sector agrícola de la región. <br /> Estas innovaciones no
        solo aumentan la productividad, sino que también promueven una
        agricultura más sostenible y resiliente, fortaleciendo la seguridad
        alimentaria y mejorando la economía local. <br /> A medida que más agricultores
        adoptan estas herramientas, la producción de papa en el altiplano
        continuará evolucionando, equilibrando la tradición con la modernidad en
        un entorno único.
      </p>
    </div>
  );
};

export default Tecnologia;
