import styled from "styled-components";
import starEmpty from "../assets/star_empty.svg";
import starFull from "../assets/star_full.svg";

const ContainerStar = styled.div`
  display: flex;
`;

function Star(props) {
  const range = [1, 2, 3, 4, 5];
  return (
    <ContainerStar>
      {range.map((rangeNumber) =>
        props.datasRating >= rangeNumber ? (
          <img src={starFull} alt="Note de l'hôte sous forme d'étoile pleine" />
        ) : null
      )}

      {range.map((rangeNumber) =>
        props.datasRating < rangeNumber ? (
          <img src={starEmpty} alt="Note de l'hôte sous forme d'étoile vide" />
        ) : null
      )}
    </ContainerStar>
  );
}

export default Star;
