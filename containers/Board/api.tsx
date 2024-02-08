import axios, { AxiosError } from "axios";

export interface AgreementsData {
  membresia: string | null;
}

type SendContactFormResponse = string;

const api = process.env.NEXT_PUBLIC_APP_API_URL;

export const sendContactForm = async (
  agreementsDataAPI: AgreementsData
): Promise<SendContactFormResponse> => {
  try {
    const response = await axios.post<SendContactFormResponse>(
      `${api}/api/videollamadas`,
      agreementsDataAPI
    );

    const responseData: SendContactFormResponse = response.data; // Asegurarnos de que response.data es de tipo SendContactFormResponse

    return responseData;
  } catch (error) {
    const axiosError = error as AxiosError<SendContactFormResponse>;

    if (axiosError.response) {
      const responseData = axiosError.response.data;
      throw new Error("Error al enviar el formulario: " + responseData);
    } else if (axiosError.request) {
      throw new Error("No se pudo conectar al servidor");
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Ocurrió un error desconocido.");
    }
  }
};
