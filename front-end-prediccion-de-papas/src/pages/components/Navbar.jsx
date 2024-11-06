import { useState } from "react";
import locationIcon from "../../assets/location.png";
import closeIcon from "../../assets/close.png";
const Navbar = () => {
  // const [isSearchVisible, setSearchVisible] = useState(false);

  // const toggleSearch = () => {
  //   setSearchVisible(!isSearchVisible);
  // };

  return (
    <div>
      {/* Navbar actualizado */}
      <div className="navbar bg-blue-500">
        <div className="flex-1">
          <div
            className="flex items-center cursor-pointer text-white text-sm sm:text-base font-bold ml-5  p-2 rounded transition duration-200"
            // onClick={toggleSearch}
          >
            {/* <img
              src={locationIcon}
              alt="Location Icon"
              className="w-3 h-4 mr-2"
            />
            Encuentra tu localidad */}
          </div>
        </div>
        <div className="flex-none mr-5">
          <div className="text-white">
            <a
              href="#about"
              className="text-sm sm:text-base  hover:text-white p-2 rounded transition duration-200"
            >
              
            </a>
          </div>
        </div>
      </div>

      {/* Cuadro de búsqueda con animación */}
      {/* <div 
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
      </div> */}
    </div>
  );
};

export default Navbar;
