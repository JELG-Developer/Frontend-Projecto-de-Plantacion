import axios from "axios";

export const PostPrediccion = async ({ prediccion }) => {
  try {
    if (prediccion !== null && prediccion !== undefined) {
      const response = await axios.post("http://127.0.0.1:8000/prediccion", {
        periodo: prediccion,
      });
      return response;
    }
  } catch (error) {
    console.error("Error al cargar los datos climáticos:", error);
    return null
  }
};
