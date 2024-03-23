import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("box", weather);
  return (
    <div>
      <h4>{weather?.name}</h4>
      {weather ? <div>{weather?.main.temp + " °C"}</div> : ""}
      <p>{weather?.weather[0].description}</p>
      {weather ? (
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
          alt="Weather Icon"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherBox;
