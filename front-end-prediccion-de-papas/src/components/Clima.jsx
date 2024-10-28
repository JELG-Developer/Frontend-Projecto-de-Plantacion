import { useState } from 'react';
import axios from 'axios';
import climaImage from '../assets/clima.jpg';
import graficasImage from '../assets/graficas.jpg';
import mapa from '../assets/mapa.png';

const Clima = () => {
  const [formData, setFormData] = useState({
    gestion: 0,
    mes: 0,
    temperatura_media: 0,
    humedad_relativa_media: 0,
    precipitacion: 0,
    presion: 0,
    velocidad_viento_media: 0,
  });

  const [alert, setAlert] = useState(null); // Estado para controlar las alertas
  const [errors, setErrors] = useState({}); // Estado para controlar los errores

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value);

    // Reemplazar valores negativos por 0
    const validValue = numericValue < 0 ? 0 : numericValue;

    setFormData((prevData) => ({
      ...prevData,
      [name]: validValue, // Actualizar con el valor válido
    }));

    // Si se ingresa un valor, quitar el error
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false, // Remover el error para el campo correspondiente
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === 0) {
        newErrors[key] = true; // Marcar campo como error si es 0
      }
    });

    // Si hay errores, actualizar el estado de errores
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // No enviar el formulario si hay errores
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/variacion', formData);

      if (response.status === 200) {
        console.log('Datos enviados correctamente:', response.data);
        setAlert({
          type: 'success',
          message: '¡Los datos se han guardado correctamente!',
        });
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setAlert({
        type: 'error',
        message: '¡Error! Los datos no pudieron ser guardados.',
      });
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row max-w-7xl bg-white rounded-lg overflow-hidden mb-5">
        <img 
          src={climaImage} 
          alt="Clima y Ecosistema" 
          className="w-full md:w-[300px] h-auto object-cover rounded-lg" 
        />
        <div className="p-4 flex flex-col justify-between">
          <h2 className="text-xl font-bold">Clima y Ecosistema</h2>
          <p className="mt-2 text-gray-700 text-justify">
            El Altiplano boliviano se caracteriza por un clima frío y seco, con temperaturas que varían entre -10 °C y 20 °C. Las precipitaciones, concentradas entre diciembre y marzo, son escasas, promediando entre 300 y 500 mm anuales. Las noches extremadamente frías afectan las prácticas agrícolas, que deben adaptarse a estas condiciones.
            <br /><br />
            A pesar de las condiciones difíciles, la región cuenta con ecosistemas variados, como pastizales de puna y zonas áridas. Plantas como el ichu (Stipa ichu) son esenciales para la ganadería local. Además, cuerpos de agua como el Lago Titicaca ayudan a regular el clima y proveen recursos vitales, permitiendo que la vida silvestre y las comunidades agrícolas prosperen en este entorno desafiante.
          </p>
        </div>
      </div>

      {/* Sección de Gráficas */}
      <div className="mb-4 h-1/3">
        <div className="divider divider-neutral mb-2">
          <h2 className="subtitle text-neutral text-sm md:text-xl lg:text-2xl">Gráficas</h2>
        </div>
        <img 
          src={graficasImage} 
          alt="Gráficas" 
          className="w-full h-[400px] object-contain rounded-lg mb-2" 
        />
      </div>

      <div className="mb-4">
        <div className="divider divider-primary mb-2">
          <h2 className="subtitle text-primary text-sm md:text-xl lg:text-2xl">Mapa</h2>
        </div>
        <img 
          src={mapa} 
          alt="Mapa" 
          className="w-full h-[400px] object-contain rounded-lg mb-4" 
        />
      </div>

      {/* Sección de Ingreso de Datos */}
      <div className="mb-4">
        <div className="divider divider-secondary mb-2">
          <h2 className="subtitle text-secondary text-sm md:text-xl lg:text-2xl">Ingreso de datos</h2>
        </div>
        <form className="flex flex-col items-center space-y-4 mt-12" onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <label key={key} className={`input input-bordered ${errors[key] ? 'input-error' : ''} flex items-center gap-2 w-full max-w-md`}>
              <span>
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
                {formData[key] === 0 && <span className="text-red-500"> *</span>} {/* Asterisco rojo si está vacío */}
              </span>
              <input 
                type="number" 
                name={key} 
                className="grow text-right" 
                placeholder="0" 
                min="0" // Establecer el valor mínimo
                onChange={handleChange} 
              />
            </label>
          ))}
          <button 
            type="submit" 
            className="btn btn-primary mt-4 w-full max-w-md"
          >
            Guardar
          </button>
          {alert && (
            <div role="alert" className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'} mt-4`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                {alert.type === 'success' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                )}
              </svg>
              <span>{alert.message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Clima;
