export const CalculateProbability = (dataArray) => {
  const baseValues = {
    temperatura: { min: 5, max: 20 },
    precipitacion: { min: 0, max: 20 },
    humedad: { min: 34, max: 90 },
    presion: { min: 600, max: 700 },
    viento: { min: 2, max: 7 },
  };

  const results = dataArray.map((dataPoint, index) => {
    const {
      "Temperatura Media": temperatura,
      Precipitación: precipitacion,
      "Humedad Relativa Media": humedad,
      Presion: presion,
      "Velocidad de Viento Media": viento,
    } = dataPoint;

    // Evaluamos las condiciones
    const cumpleCondiciones =
      temperatura >= baseValues.temperatura.min &&
      temperatura <= baseValues.temperatura.max &&
      precipitacion >= baseValues.precipitacion.min &&
      precipitacion <= baseValues.precipitacion.max &&
      humedad >= baseValues.humedad.min &&
      humedad <= baseValues.humedad.max &&
      presion >= baseValues.presion.min &&
      presion <= baseValues.presion.max &&
      viento >= baseValues.viento.min &&
      viento <= baseValues.viento.max;
    // Retornamos el objeto con el resultado de la evaluación
    return {
      ...dataPoint,
      cumpleCondiciones,
    };
  });
  return results; // Retornamos el array con los resultados
};
