import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`
      );
      const geoData = await geoResponse.json();

      if (geoData.results && geoData.results.length > 0) {
        const { latitude, longitude, name } = geoData.results[0];

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&timezone=auto`
        );
        const weatherData = await weatherResponse.json();

        setWeatherData({
          name,
          temperature: weatherData.current_weather.temperature,
          weathercode: weatherData.current_weather.weathercode,
          windspeed: weatherData.current_weather.windspeed,
        });
      } else {
        console.error("City not found");
        setWeatherData(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-0">
      <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-lg p-6 w-full h-full sm:h-auto sm:w-full sm:max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          Weather App
        </h1>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <div className="text-white text-center mt-4">Loading...</div>
        ) : (
          weatherData && <WeatherDisplay weatherData={weatherData} />
        )}
      </div>
    </div>
  );
};

export default App;
