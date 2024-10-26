import { useState } from 'react';
import locationIcon from '../assets/location.png';
import closeIcon from '../assets/close.png';

/**
 * Componente de barra de navegación que incluye un enlace a Acerca de y un
 * botón para mostrar u ocultar un cuadro de búsqueda con animación.
 *
 * El cuadro de búsqueda se muestra u oculta cuando se hace clic en el botón
 * de Encuentra tu localidad o en el ícono de cierre.
 *
 * @returns {JSX.Element} Componente de barra de navegación.
 */
const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      {/* Navbar original */}
      <nav className="bg-blue-500 p-3 relative z-10">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Texto e ícono a la izquierda */}
          <div 
            className="flex items-center text-white text-sm sm:text-base font-bold cursor-pointer" 
            onClick={toggleSearch}
          >
            Encuentra tu localidad
            <img src={locationIcon} alt="Location Icon" className="w-3 h-4 ml-2" />
          </div>

          {/* Enlace a la derecha */}
          <div className="text-white hover:text-gray-200">
            <a href="#about" className="text-sm sm:text-base">Acerca de</a>
          </div>
        </div>
      </nav>

      {/* Cuadro de búsqueda con animación */}
      <div 
        className={`fixed top-0 left-0 w-full bg-blue-600 p-5 rounded-lg z-20 transition-transform duration-500 ${isSearchVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {isSearchVisible && (
          <>
            <div className="flex items-center justify-center">
              <div className="text-white text-lg lg:w-1/2 ml-10">Cambiar ubicación:</div>
              <img 
                src={closeIcon} 
                alt="Close Icon" 
                className="w-4 h-4 cursor-pointer ml-20" 
                onClick={toggleSearch} 
              />
            </div>
            <div className="flex items-center justify-center">
              <input 
                type="text" 
                placeholder="Ingresa ciudad, o código postal" 
                className="w-72 sm:w-96 lg:w-1/2 p-1 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200" 
              />
              <button className="ml-2 p-1 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200">Buscar</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
