// src/App.jsx
import Navbar from './components/Navbar';
import upeaImage from './assets/upea.jpeg';
import backgroundImage from './assets/background.jpg'; // Importa la imagen de fondo

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Sección con fondo */}
      <div 
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between px-4 "
        style={{ backgroundImage: `url(${backgroundImage})` }} // Establece el fondo aquí
      >
        {/* Contenedor con espaciado adicional para la imagen y el texto */}
        <div className="flex items-start w-max py-5 px-4  ">
          {/* Imagen circular (oculta en móviles) */}
          <div className="overflow-hidden rounded-full border-4 border-blue-500 w-20 h-20 md:w-30 md:h-30 hidden md:flex">
            <img 
              src={upeaImage} 
              alt="Upea" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Texto alineado a la izquierda con estilo (oculto en móviles) */}
          <div className="ml-4 text-base text-left mt-2 md:mt-4 hidden md:block">
            <p className="text-white text-shadow">Universidad Pública del Alto</p>
            <p className="text-white text-shadow">Ingeniería en Sistemas</p>
          </div>
        </div>

        {/* Texto en la parte inferior izquierda */}
        <div className="text-white text-4xl md:text-6xl ml-4 font-bold shadow-lg">
          {/* este titulo tal como el ejemplo , deberia ser quizas la seccion o opcion del nav ,que este seleccionada */}
          <p className='pb-20 text-shadow tracking-wide' >Pronostico de Lluvias <br /> en el Altiplano</p>
          {/* <p className="text-shadow">Pronosticador del cultivo de papa</p>
          <p className="text-shadow">en el altiplano Boliviano</p> */}
        </div>
      </div>

      {/* Segunda sección */}
      <div className="bg-white min-h-screen">

      </div>
    </div>
  );
}

export default App;
