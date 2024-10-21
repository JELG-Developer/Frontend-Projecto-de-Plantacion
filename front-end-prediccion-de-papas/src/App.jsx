// src/App.jsx
import Navbar from './components/Navbar';
import upeaImage from './assets/upea.jpeg';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Espaciado adicional para asegurar que la imagen esté debajo del navbar */}
      <div className="pt-[100px] bg-white min-h-screen">
        <div className="flex items-start pl-5 pt-10 md:pt-0"> {/* Contenedor flex */}
          <div className="overflow-hidden rounded-full border-4 border-blue-500 w-[80px] h-[80px] md:w-[120px] md:h-[120px]"> {/* Tamaño de la imagen */}
            <img 
              src={upeaImage} 
              alt="Upea" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="ml-4 text-base text-left mt-2 md:mt-5"> {/* Texto alineado a la izquierda con margen superior */}
            <div>Universidad Pública</div>
            <div>del Alto - Ingeniería</div>
            <div>en Sistemas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
