import styled from "styled-components";
import TitleCard from "./components/TitleCard";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <AppCon>
      <div className="titleWrap">
        <TitleCard />
        <WeatherCard />
      </div>
    </AppCon>
  );
}

export default App;

const AppCon = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #e639cf, #00aeff);
  display: flex;
  justify-content: center;
  align-items: center;
  .titleWrap {
    width: 45%;
    min-height: 55%;
    /* max-height: 55%; */
    padding: 25px 35px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }
`;
