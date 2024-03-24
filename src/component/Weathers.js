import React from "react";

const Weathers = ({ weather }) => {
  const sunriseDate = new Date(weather?.sys.sunrise * 1000);
  const sunsetDate = new Date(weather?.sys.sunset * 1000);
  const sunriseStr = sunriseDate.toString().slice(15, -23);
  const sunsetStr = sunsetDate.toString().slice(15, -23);

  return (
    <div className="weathers">
      {/* 온도 */}
      <div className="box1 boxs">
        <header className="header">체감온도</header>
        <div> 체감온도: {weather?.main.feels_like + "°"}</div>
        <div> 해수면 대기압 hPa: {weather?.main.pressure}</div>
        <div> 습도: {weather?.main.humidity}</div>
        <div> 가시성: {weather?.visibility + "m"}</div>
      </div>

      {/* 풍속 */}
      <div className="box2 boxs">
        <header className="header">바람</header>
        <div>풍속: {weather?.wind.speed + "m/s"}</div>
        <div>돌풍: {weather?.wind.gust + "m/s"}</div>
        <div>바람 방향: {weather?.wind.deg + "°"}</div>
        <div>흐림: {weather?.clouds.all + "%"}</div>
        <div>해수면의 대기압: {weather?.main.sea_level + "hPa"}</div>
        <div>지상의 대기압: {weather?.main.grnd_level + "hPa"}</div>
      </div>

      {/* 일출몰 */}
      <div className="box3 boxs">
        <header className="header">일출 및 일몰</header>
        <div>일출:{sunriseStr}</div>
        <div>일몰:{sunsetStr}</div>
      </div>
    </div>
  );
};

export default Weathers;
