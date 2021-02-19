import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

function WeatherCard() {
  const [img] = useState("");
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=seoul&appid=764e4cff8b404f68537f73a69aea8a05`
      )
      .then((res: AxiosResponse<any>) => {
        console.log(res);
      });
  }, []);

  return (
    <WeatherCardCon>
      <i className="fas fa-cloud fa-10x"></i>
      <span>12도</span>
    </WeatherCardCon>
  );
}

export default WeatherCard;

const WeatherCardCon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  i {
    margin-bottom: 12px;
    color: white;
  }
  span {
    text-align: center;
    font-size: 1.6rem;
  }
`;
