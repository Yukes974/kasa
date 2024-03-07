import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  border-radius: 10px;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 340px 340px 340px 340px 340px 340px 340px;
  gap: 40px;
  @media all and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 0;
    background-color: #ffffff;
  }
`;

const CardLink = styled(Link)``;

const CardBox = styled.div`
  position: relative;
  height: 100%;
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

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

function Card(props) {
  return (
    <ContainerCard>
      {props.datasJson.map((logement) => {
        return (
          <CardLink to={`/logement/${logement.id}`}>
            <CardBox>
              <CardTitle>{logement.title}</CardTitle>
              <CardImage src={logement.cover} />
            </CardBox>
          </CardLink>
        );
      })}
    </ContainerCard>
  );
}

export default Card;
