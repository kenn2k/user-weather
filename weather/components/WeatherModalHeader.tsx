import { WeatherData } from "@/weather/types";
import { getWeatherIcon } from "@/weather/utils/getWeatherIcon";

interface WeatherModalHeaderProps {
  data?: WeatherData | null;
}

export const WeatherModalHeader = ({ data }: WeatherModalHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="text-2xl font-semibold text-gray-900">Weather</h2>
      {data && (
        <span className="text-2xl">
          {getWeatherIcon(data.current_weather.weathercode)}
        </span>
      )}
    </div>
  );
};
