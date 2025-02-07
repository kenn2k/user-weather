import { FormattedWeatherData } from "@/weather/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface WeatherTemperatureDisplayProps {
  weather: FormattedWeatherData;
}

export const WeatherTemperature = ({
  weather,
}: WeatherTemperatureDisplayProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-900">
          {weather.current}°C
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          <ChevronDown className="w-4 h-4 text-blue-500" />
          <span>{weather.min}°C</span>
        </div>
        <div className="w-px h-4 bg-gray-300"></div>
        <div className="flex items-center gap-1">
          <ChevronUp className="w-4 h-4 text-red-500" />
          <span>{weather.max}°C</span>
        </div>
      </div>
    </div>
  );
};
