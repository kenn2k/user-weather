"use client";

import { getWeatherKey } from "@/weather/constants/queryKeys";
import { weatherService } from "@/weather/services/weatherService";
import { useQuery } from "@tanstack/react-query";

export const useGetWeather = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: getWeatherKey(longitude, latitude),
    queryFn: () => {
      return weatherService.getWeather(latitude, longitude);
    },
  });
};
