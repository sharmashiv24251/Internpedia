import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaThermometerHalf, FaWind } from "react-icons/fa";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const WeatherDisplay = ({ weatherData }) => {
  const getWeatherIcon = (code) => {
    if (code <= 3) return <WiDaySunny className="text-6xl text-yellow-300" />;
    if (code <= 48) return <WiCloudy className="text-6xl text-gray-300" />;
    if (code <= 67) return <WiRain className="text-6xl text-blue-300" />;
    if (code <= 77) return <WiSnow className="text-6xl text-white" />;
    return <WiThunderstorm className="text-6xl text-yellow-500" />;
  };

  const getWeatherDescription = (code) => {
    if (code <= 3) return "Clear";
    if (code <= 48) return "Cloudy";
    if (code <= 67) return "Rainy";
    if (code <= 77) return "Snowy";
    return "Thunderstorm";
  };

  return (
    <Card className="bg-white bg-opacity-10 text-white mt-6 border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{weatherData.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="flex items-center justify-center w-full">
          {getWeatherIcon(weatherData.weathercode)}
        </div>
        <p className="text-4xl font-bold mt-4">{weatherData.temperature}°C</p>
        <p className="text-xl mt-2">
          {getWeatherDescription(weatherData.weathercode)}
        </p>
        <div className="flex justify-between w-full mt-6">
          <div className="flex items-center">
            <FaThermometerHalf className="mr-2" />
            <span>{weatherData.temperature}°C</span>
          </div>
          <div className="flex items-center">
            <FaWind className="mr-2" />
            <span>{weatherData.windspeed} km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;
