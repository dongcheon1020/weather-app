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
  const [weatherBg, setWeatherBg] = useState(null);

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
      setWeatherBg(weatherClassification(data.weather[0].icon));
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
      setWeatherBg(weatherClassification(data.weather[0].icon));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAPIerr(error.message);
    }
  };
  // 날씨 백그라운드
  const weatherClassification = (weather) => {
    let code = weather.slice(0, -1);
    switch (code) {
      case "01":
        return "sun";
        break;
      case "02":
      case "03":
      case "04":
        return "clouds";
        break;
      case "05":
      case "10":
      case "11":
        return "rain";
        break;
      case "13":
        return "snow";
        break;
      case "50":
        return "mist";
        break;

      default:
        return "아무값없음";
        break;
    }
  };

  // lifeCycle
  const videoRef = useState(null);

  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
    console.log("weatherBg", weatherBg);
  }, [city]);

  // DOM
  return (
    <div>
      {weatherBg ? (
        <video
          src={process.env.PUBLIC_URL + `/video/${weatherBg}.mp4`}
          muted
          autoPlay
          loop
        />
      ) : (
        <video
          src={process.env.PUBLIC_URL + `/video/sun.mp4`}
          muted
          autoPlay
          loop
        />
      )}

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
