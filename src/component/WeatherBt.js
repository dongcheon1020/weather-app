import React from "react";

const WeatherBt = ({ cities, setCity, getWeatherByCity }) => {
  return (
    <div>
      <button
        onClick={() => {
          setCity(null);
        }}
      >
        Current Location
      </button>
      {cities.map((city, index) => (
        <button onClick={() => setCity(city)} key={index}>
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherBt;
