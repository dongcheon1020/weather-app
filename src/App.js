import "./App.css";
import { useState, useEffect } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherBt from "./component/WeatherBt";
import Loading from "./component/Loading";

function App() {
  // 변수
  const [weather, setWeather] = useState(null);
  const cities = ["Paris", "New York", "Tokyo", "Seoul"];
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [APIerr, setAPIerr] = useState(null);

  // 함수
  // 위도 경도 불러오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  // api호출
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=289933327225705a87c1c131ea5628f1&lang=kr&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAPIerr(error.message);
    }
  };
  // 버튼 클릭시 해당 도시 날씨
  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?&appid=289933327225705a87c1c131ea5628f1&lang=kr&units=metric&q=${city}`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAPIerr(error.message);
    }
  };

  // lifeCycle
  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // DOM
  return (
    <div>
      <div className="wrapper">
        {loading ? (
          <Loading />
        ) : !APIerr ? (
          <>
            <WeatherBox weather={weather} />
            <WeatherBt cities={cities} setCity={setCity} />
          </>
        ) : (
          <>{APIerr}</>
        )}
      </div>
    </div>
  );
}

export default App;
