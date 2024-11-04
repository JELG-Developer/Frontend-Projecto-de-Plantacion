import { useEffect } from "react";
import upeaLogo from "../../assets/upea.jpeg"; // Asegúrate de tener el logo en la carpeta correcta
import axios from "axios";

const Footer = () => {
  const APIKey = "c34e5300156b6ed973d2421c25421b56";

  const getWeather = async (citynames) => {
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${citynames}&appid=${APIKey}&units=metric`;

    try {
      const response = await axios.get(queryURL);
      console.log(response.data); 
    } catch (error) {
      console.error("Unable to connect", error);
    }
  };

  useEffect(() => {
    getWeather("La paz"); 
  }, []);

  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 border-base-300 border-t mt-8">
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <a className="link link-hover">Noticias</a>
          <a className="link link-hover">Herramientas</a>
          <a className="link link-hover">Acerca de</a>
        </nav>
        <nav>
          <h6 className="footer-title">Equipo</h6>
          <a className="link link-hover">Sobre nosotros</a>
          <a className="link link-hover">Contacto</a>
          <a className="link link-hover">Trabajos</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Términos de uso</a>
          <a className="link link-hover">Política de privacidad</a>
        </nav>
      </footer>

      {/* Sección de la Universidad */}
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="flex items-center">
          <div className="w-12 h-12 mr-3 rounded-full overflow-hidden border-2 border-gray-400">
            <img
              src={upeaLogo}
              alt="UPEA Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p>
            Universidad Pública de El Alto
            <br />
            Proporcionando educación de calidad desde 1992
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
