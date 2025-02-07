export interface WeatherResponse {
  current_weather: {
    temperature: number;
    weathercode?: number;
  };
}

export interface WeatherModalProps {
  latitude: number;
  longitude: number;
  onClose: () => void;
}

export interface WeatherData {
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
  current_weather: {
    temperature: number;
    weathercode?: number;
  };
}

export interface FormattedWeatherData {
  current: number;
  min: number | string;
  max: number | string;
}
