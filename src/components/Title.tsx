import styled from "styled-components";

interface titleType {
  title: string;
  content: string;
}

function Title({ title, content }: titleType) {
  return (
    <TitleCon>
      <h1>{title}</h1>
      <span>{content}</span>
    </TitleCon>
  );
}

export default Title;

const TitleCon = styled.div`
  h1 {
    padding: 12px 4px;
    color: #111111;
    font-size: 1rem;
  }
  span {
    padding: 4px 8px;
    font-size: 1.6rem;
  }
`;
