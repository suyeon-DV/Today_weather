import styled from "styled-components";
import Title from "./Title";

function TitleCard() {
  return (
    <TitleCardCon>
      <Title title="도시" content="서울" />
      <Title title="날짜" content="2021년 2월 13일" />
    </TitleCardCon>
  );
}

export default TitleCard;

const TitleCardCon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
