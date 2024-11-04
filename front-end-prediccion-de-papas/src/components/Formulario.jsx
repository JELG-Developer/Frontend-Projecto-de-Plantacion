import { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
  const [formData, setFormData] = useState({
    gestion: 0,
    mes: 0,
    temperatura_media: 0,
    estacion: "",
    altura: 0,
    longitud: 0,
    latitud: 0,
    humedad_relativa_media: 0,
    precipitacion: 0,
    presion: 0,
    velocidad_viento_media: 0
  });

  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = [
      "gestion", "mes", "temperatura_media", "altura", "longitud",
      "latitud", "humedad_relativa_media", "precipitacion", "presion",
      "velocidad_viento_media"
    ];

    // Convertir a número si es un campo numérico
    const parsedValue = numericFields.includes(name) ? parseFloat(value) || 0 : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));

    // Limpiar el error si el campo es completado
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSwitchChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      estacion: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      estacion: !value, // Establece el error si está vacío
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    // Solo validar los primeros tres campos
    if (formData.gestion === 0) newErrors.gestion = true;
    if (formData.mes === 0) newErrors.mes = true;
    if (formData.estacion === "") newErrors.estacion = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/variacion', formData);
      if (response.status === 200) {
        setAlert({
          type: 'success',
          message: '¡Los datos se han guardado correctamente!',
        });
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setAlert({
        type: 'error',
        message: '¡Error! Los datos no pudieron ser guardados.',
      });
    }
  };

  const handleReset = () => {
    setFormData({
      gestion: 0,
      mes: 0,
      temperatura_media: 0,
      estacion: "",
      altura: 0,
      longitud: 0,
      latitud: 0,
      humedad_relativa_media: 0,
      precipitacion: 0,
      presion: 0,
      velocidad_viento_media: 0
    });
    setErrors({});
    setAlert(null);
  };

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12" onSubmit={handleSubmit}>
      <label className={`input input-bordered ${errors.gestion ? "input-error" : ""} flex items-center gap-2 w-full max-w-md h-[130px]`}>
        <span>
          Gestión
          {errors.gestion && <span className="text-red-500"> *</span>}
        </span>
        <input
          type="number"
          name="gestion"
          className="grow text-right"
          placeholder="0"
          min="0"
          value={formData.gestion}
          onChange={handleChange}
        />
      </label>

      <label className={`input input-bordered ${errors.mes ? "input-error" : ""} flex flex-col items-center gap-2 w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Mes
          {errors.mes && <span className="text-red-500"> *</span>}
        </span>
        <select
          name="mes"
          className="select select-primary w-full max-w-xs"
          value={formData.mes}
          onChange={handleChange}
        >
          <option value={0} disabled>Seleccione Mes</option>
          {["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].map((mes, index) => (
            <option key={index} value={index + 1}>
              {mes}
            </option>
          ))}
        </select>
      </label>

      <label className={`input input-bordered ${errors.estacion ? "input-error" : ""} flex flex-col items-center gap-2 w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Estación
          {errors.estacion && <span className="text-red-500"> *</span>}
        </span>
        <select
          name="estacion"
          className="select select-primary w-full max-w-xs"
          value={formData.estacion}
          onChange={(e) => handleSwitchChange(e.target.value)}
        >
          <option value="" disabled>Seleccione Estación</option>
          <option value="Chachacomani-Batallas (GPRS)">Chachacomani-Batallas (GPRS)</option>
          <option value="Chua Cocani_M (GPRS)">Chua Cocani (GPRS)</option>
          <option value="Huarisuyo (GPRS)">Huarisuyo (GPRS)</option>
          <option value="Viacha_M (GPRS)">Viacha M (GPRS)</option>
        </select>
      </label>

      {/* Campos de entrada tipo range con estilo de DaisyUI */}
      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Temperatura Media
        </span>
        <input
          type="range"
          name="temperatura_media"
          className="range range-primary range-xs"
          min="0"
          max="60"
          step="0.1"
          value={formData.temperatura_media}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.temperatura_media.toFixed(1)}°C</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Altura
        </span>
        <input
          type="range"
          name="altura"
          className="range range-primary range-xs"
          min="3000"
          max="5000"
          step="1"
          value={formData.altura}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.altura} m</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Longitud
        </span>
        <input
          type="range"
          name="longitud"
          className="range range-primary range-xs"
          min="-180"
          max="180"
          step="0.1"
          value={formData.longitud}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.longitud.toFixed(1)}°</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Latitud
        </span>
        <input
          type="range"
          name="latitud"
          className="range range-primary range-xs"
          min="-90"
          max="90"
          step="0.1"
          value={formData.latitud}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.latitud.toFixed(1)}°</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Humedad Relativa Media
        </span>
        <input
          type="range"
          name="humedad_relativa_media"
          className="range range-primary range-xs"
          min="0"
          max="100"
          step="0.1"
          value={formData.humedad_relativa_media}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.humedad_relativa_media.toFixed(1)}%</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Precipitación
        </span>
        <input
          type="range"
          name="precipitacion"
          className="range range-primary range-xs"
          min="0"
          max="500"
          step="0.1"
          value={formData.precipitacion}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.precipitacion.toFixed(1)} mm</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Presión
        </span>
        <input
          type="range"
          name="presion"
          className="range range-primary range-xs"
          min="900"
          max="1100"
          step="0.1"
          value={formData.presion}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.presion.toFixed(1)} hPa</span>
      </label>

      <label className={`input input-bordered flex flex-col items-center w-full max-w-md h-[130px]`}>
        <span className="mt-5">
          Velocidad Viento Media
        </span>
        <input
          type="range"
          name="velocidad_viento_media"
          className="range range-primary range-xs"
          min="0"
          max="100"
          step="0.1"
          value={formData.velocidad_viento_media}
          onChange={handleChange}
        />
        <span className="text-sm mt-1">{formData.velocidad_viento_media.toFixed(1)} m/s</span>
      </label>

      <div className="flex flex-col mt-4 space-y-2">
        <button type="submit" className="btn btn-primary w-full max-w-xs">Enviar</button>
        <button type="button" className="btn btn-secondary w-full max-w-xs" onClick={handleReset}>Limpiar</button>
      </div>

      {alert && (
        <div className={`alert alert-${alert.type} mt-4`}>
          {alert.message}
        </div>
      )}
    </form>
  );
};

export default Formulario;
