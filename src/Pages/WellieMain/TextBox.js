import styled from "styled-components";

export default function TextBox({ bigStr, smallStr }) {
  return (
    <TitleBox data-aos="fade-down">
      <Title>
        <p>{bigStr && bigStr[0]}</p>
        <p>{bigStr && bigStr[1]}</p>
        <p>{bigStr && bigStr[2]}</p>
        <p>{bigStr && bigStr[3]}</p>
      </Title>
      <SubTitle>
        <p>{smallStr && smallStr[0]}</p>
        <span>{smallStr && smallStr[1]}</span>
        <span>{smallStr && smallStr[2]}</span>
        <p>{smallStr && smallStr[3]}</p>
      </SubTitle>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  top: 70px;
  position: relative;
  left: 20px;
  font-size: 70px;
  font-weight: 900;
  font-family: "Noto Serif KR", Serif;
`;

const Title = styled(TitleBox)`
  margin-bottom: 15px;
  font-size: 76px;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 10px;
`;

const SubTitle = styled(TitleBox)`
  font-size: 22px;
  font-weight: 800;
  line-height: 1.5;
  font-weight: 900;
  letter-spacing: 4px;

  span {
    &:nth-child(2) {
      color: rgb(164, 81, 247);
    }
  }
`;
