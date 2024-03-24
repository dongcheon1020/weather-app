import React from "react";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather-box">
      <h4>{weather?.name}</h4>
      {weather ? <div className="temp">{weather?.main.temp + "°"}</div> : ""}
      <div className="description">
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
      <div className="tems">
        <p>{"최고" + weather?.main.temp_max}</p>
        <p>{"최저" + weather?.main.temp_min}</p>
      </div>
    </div>
  );
};

export default WeatherBox;
