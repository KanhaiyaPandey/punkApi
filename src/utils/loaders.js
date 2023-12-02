import { customFetch } from "./customUrl";


export const Homeloader = async () => {
    const response = await customFetch("/beers");
    const products = response.data;
    return { products };
  };
