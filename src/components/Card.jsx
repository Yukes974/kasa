import styled from "styled-components";

const CardBox = styled.div`
  position: relative;
  border-radius: 10px;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(255, 96, 96, 1) 100%
  );
`;

const CardTitle = styled.span`
  position: absolute;
  left: 20px;
  bottom: 20px;
  max-width: 100px;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

function Card(props) {
  return (
    <CardBox>
      <CardTitle>{props.CardTitle}</CardTitle>
      <img src={props.CardImage} />
    </CardBox>
  );
}

export default Card;
