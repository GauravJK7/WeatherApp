import React from "react";

function WeatherHighlight({ weatherData }) {
  if (
    !weatherData ||
    !weatherData.main ||
    !weatherData.wind ||
    !weatherData.sys ||
    !weatherData.clouds
  ) {
    return null; // Render nothing if the necessary data is not available
  }

  const humidity = weatherData.main.humidity ?? "N/A";
  const visibilityMeters = weatherData.visibility ?? 0;
  const visibility = (visibilityMeters / 1000).toFixed(1); // Convert meters to km
  const windSpeed = (weatherData.wind.speed ?? 0).toFixed(1); // Speed might need unit conversion too
  const cloudiness = weatherData.clouds.all ?? 0;
  const sunrise = new Date(
    (weatherData.sys.sunrise ?? 0) * 1000
  ).toLocaleTimeString();
  const sunset = new Date(
    (weatherData.sys.sunset ?? 0) * 1000
  ).toLocaleTimeString();

  return (
    <div className="bg-white rounded-lg shadow-md p-9">
      <h2 className="text-xl font-mono font-bold mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg  font-semibold ">Sunrise</h3>
          <p className="text-lg">{sunrise}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold ">Sunset</h3>
          <p className="text-lg">{sunset}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Humidity</h3>
          <p className="text-lg">{humidity}%</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Wind Speed</h3>
          <p className="text-lg">{windSpeed} km/h</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Visibility</h3>
          <p className="text-lg">{visibility} km</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Cloudiness</h3>
          <p className="text-lg">{cloudiness}%</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherHighlight;
