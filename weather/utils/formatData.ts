import { WeatherData } from "@/weather/types";

export const formatData = (data: WeatherData) => {
  const today = new Date().toISOString().split("T")[0];
  const todayTemps = data.hourly.temperature_2m.filter(
    (_: number, index: number) => data.hourly.time[index].startsWith(today)
  );

  return {
    current: data.current_weather.temperature,
    min: todayTemps.length ? Math.min(...todayTemps) : "N/A",
    max: todayTemps.length ? Math.max(...todayTemps) : "N/A",
  };
};
