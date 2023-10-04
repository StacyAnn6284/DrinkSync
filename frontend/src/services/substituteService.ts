import axios from "axios";
import { SubstituteResponse, Substitute } from "../models/substitute";

const BASE_URL = "http://127.0.0.1:5001/drinksync-426f9/us-central1/api";

const SubstituteService = {
  searchSubstitutes: async (searchTerm: string): Promise<Substitute[]> => {
    try {
      const response = await axios.get<SubstituteResponse>(
        `${BASE_URL}/substitutes?searchTerm=${searchTerm}`
      );
      return response.data.substitutes;
    } catch (error) {
      throw error;
    }
  },

  createSubstitute: async (substitute: Substitute): Promise<void> => {
    try {
      await axios.post(`${BASE_URL}/substitutes`, substitute);
    } catch (error) {
      throw error;
    }
  },
};
export default SubstituteService;
