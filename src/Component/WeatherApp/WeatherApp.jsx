import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherHighlight from "./WeatherHighlight";
import WeatherToda from "./WeatherToda";

const WeatherApp = () => {
  const [location, setLocation] = useState(" ");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ipapi.co/json/`);
        const data = response.data;
        console.log(data);

        setLocation(data.city || "Enter a Location");
      } catch (error) {
        console.log("Error Fetching Location", error);
        setLocation("Enter a Location");
      }
    };
    fetchData();
  }, []);

  // const api_key = process.env.API_KEY;
  const api_key = import.meta.env.VITE_APP_API_KEY;
  // console.log(process.env);
  const handlesearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`
      );
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.log("Error in Fetching data", error);
    }
  };

  console.log(weatherData);
  return (
    <div className="container mx-auto p-4 bg-indigo-200 rounded-lg shadow-md">
      <h1 className="flex justify-center text-4xl font-bold font-mono mb-8 mt-8">
        Weather App
      </h1>
      <div class="max-w-md mx-auto my-4">
        <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            onClick={handlesearch}
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {weatherData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-800  rounded-lg shadow-md p-8">
            <h2 className="text-xl text-white font-semibold mb-4 ">
              Today's Weather
            </h2>
            <WeatherToda weatherData={weatherData} />
          </div>
          <div className="bg-blue-800 rounded-lg shadow-md p-8">
            <h2 className="text-xl text-white font-semibold mb-4 ">
              Today's Highlights
            </h2>
            <WeatherHighlight weatherData={weatherData} />
          </div>
        </div>
      )}
      {!weatherData && (
        <p className="text-2xl mt-4 font-bold text-orange-600">
          No Weather data Available
        </p>
      )}
    </div>
  );
};

export default WeatherApp;
