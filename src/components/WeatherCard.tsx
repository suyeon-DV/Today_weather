import styled from "styled-components";
import { useState } from "react";

function WeatherCard() {
  const [img] = useState("");

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
    /* display: block; */
    text-align: center;
    font-size: 1.6rem;
  }
`;
