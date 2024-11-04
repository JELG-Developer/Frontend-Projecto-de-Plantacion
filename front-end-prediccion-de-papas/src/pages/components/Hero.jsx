import upeaImage from '../../assets/upea.jpeg';
import backgroundImage from "../../assets/background.jpg"
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-start w-max py-5 px-4">
        <div className="overflow-hidden rounded-full border-4 border-blue-500 w-20 h-20 md:w-30 md:h-30 hidden md:flex">
          <img
            src={upeaImage}
            alt="Upea"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 text-base text-left mt-2 md:mt-4 hidden md:block">
          <p className="text-white text-shadow">Universidad Pública del Alto</p>
          <p className="text-white text-shadow">Ingeniería en Sistemas</p>
        </div>
      </div>
      <div className="text-white text-4xl md:text-6xl ml-4 font-bold">
        <p className="pb-20 text-shadow tracking-wide">
          Pronóstico de Lluvias <br /> en el Altiplano
        </p>
      </div>
    </div>
  );
};

export default Hero;
