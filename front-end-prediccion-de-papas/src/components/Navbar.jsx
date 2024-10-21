// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 w-full fixed top-0 z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between mx-auto" style={{ marginLeft: "20px" }}>
        {/* Texto a la izquierda */}
        <div className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-0">
          Encuentra tu localidad
        </div>

        {/* Cuadro de texto en el centro */}
        <div className="flex-grow mx-4 flex justify-center">
          <input 
            type="text" 
            placeholder="Ingresa tu localidad" 
            className="w-72 sm:w-96 lg:w-[600px] p-2 rounded-lg border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200" 
          />
        </div>

        {/* Enlace a la derecha */}
        <div className="text-white hover:text-gray-200" style={{ marginRight: "20px" }}>
          <a href="#about" className="text-base sm:text-lg">Acerca de</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
