import type React from "react";
import { Cloudy, Sun, CloudRainIcon, CloudSnowIcon } from "lucide-react";

const weatherIcons: Record<number, React.ReactNode> = {
  0: <Sun />,
  1: <Cloudy />,
  2: <Cloudy />,
  3: <Cloudy />,
  45: <CloudRainIcon />,
  48: <CloudRainIcon />,
  51: <CloudRainIcon />,
  53: <CloudRainIcon />,
  55: <CloudRainIcon />,
  56: <CloudRainIcon />,
  57: <CloudRainIcon />,
  61: <CloudRainIcon />,
  63: <CloudRainIcon />,
  65: <CloudRainIcon />,
  66: <CloudRainIcon />,
  67: <CloudRainIcon />,
  71: <CloudSnowIcon />,
  73: <CloudSnowIcon />,
  75: <CloudSnowIcon />,
  77: <CloudSnowIcon />,
  80: <CloudRainIcon />,
  81: <CloudRainIcon />,
  82: <CloudRainIcon />,
  85: <CloudSnowIcon />,
  86: <CloudSnowIcon />,
  95: <CloudSnowIcon />,
  96: <CloudSnowIcon />,
  99: <CloudSnowIcon />,
};

export const getWeatherIcon = (
  weatherCode: number | undefined
): React.ReactNode | null => {
  if (weatherCode === undefined) return null;
  return weatherIcons[weatherCode] || null;
};
