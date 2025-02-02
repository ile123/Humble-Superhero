import axios from "axios";
import { Hero } from "../type/Hero";

export const saveHumbleHero = async (hero: Hero) => {
  try {
    const response = await axios.post("http://localhost:3000/superheroes", hero, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        return {
          data: error.response.data,
          status: error.code
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
        return {
          data: error.response,
          status: error.code
        }
      }
    } else {
      console.error("Error setting up request:", (error as Error).message);
      return {
        data: "Uknown error",
        status: 500
      }
    }
  }
};

export const getHumbleHeros = async () => {
  try {
    const response = await axios.get("http://localhost:3000/superheroes");
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("Error response from server:", error.response.data);
        return {
          data: error.response.data,
          status: error.code
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
        return {
          data: error.response,
          status: error.code
        }
      }
    } else {
      console.error("Error setting up request:", (error as Error).message);
      return {
        data: "Uknown error",
        status: 500
      }
    }
  }
};
