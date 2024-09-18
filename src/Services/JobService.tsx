import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";


export const jobPostAPI = async (formData : FormData) => {
    try {
      const data = await axios.post<FormData>(process.env.REACT_APP_BACKEND_ENDPOINT + "job/" , formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  };