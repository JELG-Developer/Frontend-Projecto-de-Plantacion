import upeaLogo from '../assets/upea.jpeg'; // Asegúrate de tener el logo en la carpeta correcta

/**
 * Componente que renderiza el pie de página de la aplicación.
 *
 * El pie de página contiene el logotipo de la Universidad Pública de El Alto,
 * enlaces a secciones relevantes de la aplicación y enlaces adicionales a
 * políticas de privacidad, responsabilidad y ayuda.
 *
 * @returns {JSX.Element} Componente que renderiza el pie de página.
 */
const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-6 mt-12 px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Sección del Logo y texto */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-12 h-12 mr-3 rounded-full overflow-hidden border-2 border-white">
            <img src={upeaLogo} alt="UPEA Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-sm">
            <p>Universidad Pública de El Alto</p>
          </div>
        </div>

        {/* Sección de enlaces */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-3 text-xs md:text-sm">
          <a href="#noticias" className="hover:underline">Noticias</a>
          <a href="#herramientas" className="hover:underline">Herramientas</a>
          <a href="#acerca" className="hover:underline">Acerca de</a>
        </div>
      </div>
      
      {/* Segunda línea de enlaces */}
      <div className="mt-4 border-t border-gray-600 pt-4 text-center text-xs">
        <a href="#privacidad" className="hover:underline mx-2">Privacidad</a>|
        <a href="#responsabilidad" className="hover:underline mx-2">Responsabilidad</a>|
        <a href="#contacto" className="hover:underline mx-2">Contáctenos</a>|
        <a href="#ayuda" className="hover:underline mx-2">¿Necesitar ayuda?</a>
      </div>
    </footer>
  );
}

export default Footer;
