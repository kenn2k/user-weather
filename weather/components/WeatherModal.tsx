import { WeatherModalActions } from "@/weather/components/WeatherModalActions";
import { WeatherModalHeader } from "@/weather/components/WeatherModalHeader";
import { WeatherTemperature } from "@/weather/components/WeatherTemperature";
import { useGetWeather } from "@/weather/hooks/useGetWeather";
import { WeatherModalProps } from "@/weather/types";
import { formatData } from "@/weather/utils/formatData";

export const WeatherModal = ({
  latitude,
  longitude,
  onClose,
}: WeatherModalProps) => {
  const { data, isLoading } = useGetWeather(latitude, longitude);
  const weather = data ? formatData(data) : null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-blue-100 via-sky-200 to-indigo-100 rounded-lg shadow-xl w-full max-w-sm relative overflow-hidden">
        <div className="p-6">
          <WeatherModalHeader data={data} />

          <div className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-24">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600" />
              </div>
            ) : weather ? (
              <WeatherTemperature weather={weather} />
            ) : (
              <div className="text-center text-sky-800">
                Weather data not available
              </div>
            )}
          </div>

          <WeatherModalActions onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
