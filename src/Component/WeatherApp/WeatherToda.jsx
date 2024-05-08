import React from "react";

const WeatherToda = ({ weatherData }) => {
  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.weather ||
    weatherData.weather.length === 0
  ) {
    return null;
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const feelsLike = Math.round(weatherData.main.feels_like - 273.15);
  const description = weatherData.weather[0].description;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const location = weatherData.name;
  const country = weatherData.sys.country;
  const iconCode = weatherData.weather[0].icon;

  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-9">
      <div>
        <h2 className="text-4xl font-bold mb-2">{temperature}°c</h2>
        <p className="text-lg">
          <span className="font-bold mr-1">Feels Like:</span>
          {feelsLike}°c
        </p>
        <p className="text-lg">
          <span className="font-bold mr-1">Description:</span>
          {description}
        </p>
        <hr className="border-gray-300 my-4" />
        <div className="text-lg space-y-4">
          <p>
            <span className="font-bold mr-1">Date:</span>
            {date}
          </p>
          <p>
            <span className="font-bold mr-1">Time:</span>
            {time}
          </p>
          <p>
            <span className="font-bold mr-1">Location:</span>
            {location},{country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherToda;
