import { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [formData, setFormData] = useState({
    gestion: 0,
    mes: 0,
    estacion : "",
    latitud : 0,
    longitud : 0,
    altura : 0,
    temperatura_media: 0,
    humedad_relativa_media: 0,
    precipitacion: 0,
    presion: 0,
    velocidad_viento_media: 0,
  });

  const [alert, setAlert] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = Number(value);
    const validValue = numericValue < 0 ? 0 : numericValue;

    setFormData((prevData) => ({
      ...prevData,
      [name]: validValue,
    }));

    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === 0) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/variacion",
        formData
      );

      if (response.status === 200) {
        setAlert({
          type: "success",
          message: "¡Los datos se han guardado correctamente!",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setAlert({
        type: "error",
        message: "¡Error! Los datos no pudieron ser guardados.",
      });
    }
  };

  return (
    <form
      className="flex flex-col items-center space-y-4 mt-12"
      onSubmit={handleSubmit}
    >
      {Object.keys(formData).map((key) => (
        <label
          key={key}
          className={`input input-bordered ${
            errors[key] ? "input-error" : ""
          } flex items-center gap-2 w-full max-w-md`}
        >
          <span>
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
            {formData[key] === 0 && <span className="text-red-500"> *</span>}
          </span>
          <input
            type="number"
            name={key}
            className="grow text-right"
            placeholder="0"
            min="0"
            onChange={handleChange}
          />
        </label>
      ))}
      <button type="submit" className="btn btn-primary mt-4 w-full max-w-md">
        Guardar
      </button>
      {alert && (
        <div
          role="alert"
          className={`alert ${
            alert.type === "success" ? "alert-success" : "alert-error"
          } mt-4`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            {alert.type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            )}
          </svg>
          <span>{alert.message}</span>
        </div>
      )}
    </form>
  );
};

export default Formulario;
