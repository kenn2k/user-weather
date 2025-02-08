import { weatherApiInstance } from "@/weather/api/instance";

export const weatherService = {
  getWeather: async (latitude: number, longitude: number) => {
    const { data } = await weatherApiInstance.get("", {
      params: {
        longitude,
        latitude,
        current_weather: true,
        hourly: "temperature_2m",
        timezone: "auto",
      },
    });
    return data;
  },
};
