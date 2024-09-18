import axios from "axios";
import { JobPost } from "../Models/Job";
import { handleError } from "../Helpers/ErrorHandler";


export const jobPostAPI = async (
    title: string,
    content: string,
    symbol: string
  ) => {
    try {
      const data = await axios.post<JobPost>(process.env.REACT_APP_BACKEND_ENDPOINT + "comment/" + `${symbol}`, {
        title: title,
        content: content,
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  };