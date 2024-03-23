import React from "react";

const Weathers = ({ weather }) => {
  return (
    <div className="weathers">
      {/* 온도 */}
      <div className="box1 boxs">
        <header className="header">체감온도</header>
        <div> 체감온도{weather?.main.feels_like}</div>
        <div> 해수면 대기압 hPa{weather?.main.pressure}</div>
        <div> 습도 %{weather?.main.humidity}</div>
      </div>

      {/* 풍속 */}
      <div className="box2 boxs">
        <header className="header">바람</header>
        <div>
          풍속 단위 기본값: 미터/초, 미터법: 미터/초, 임페리얼: 마일/시간
          {weather?.wind.speed}
        </div>
        <div>바람 방향, 도 (기상){weather?.wind.deg}</div>
        <div>clouds.all흐림, %{weather?.clouds.all}</div>
      </div>

      {/* 일출몰 */}
      <div className="box3 boxs">
        <header className="header">일출 및 일몰</header>
        <div> 일출 시간, 유닉스, UTC{weather?.sys.sunrise}</div>
        <div>일몰 시간, 유닉스, UTC{weather?.sys.sunset}</div>
      </div>
    </div>
  );
};

export default Weathers;
