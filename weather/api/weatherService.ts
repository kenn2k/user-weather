import axios from "axios";

export const weatherApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WEATHER_API_BASE,
});
