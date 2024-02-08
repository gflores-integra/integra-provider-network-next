import axios from "axios";

const saveData = async (formData: any) => {
  try {
    const response = await axios.post("tu_endpoint_aquí", formData);
    console.log("Datos guardados exitosamente:", response.data);
  } catch (error) {
    console.error("Error guardando los datos:", error);
  }
};

export { saveData };
