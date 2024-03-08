import styled from "styled-components";
import { useState } from "react";
import ContainersImgsSlideshow from "./ContainersImgsSlideshow";
import arrow_left from "../../assets/arrow_left.svg";
import arrow_right from "../../assets/arrow_righ.svg";

const ContainerSlideshow = styled.section`
  display: flex;
  position: relative;
`;

const PreviousImgSlideshow = styled.img`
  width: 55px;
  height: 55px;
  bottom: 50%;
  left: 20px;
  position: absolute;
  cursor: pointer;
`;

const NextImgSlideshow = styled.img`
  width: 55px;
  height: 55px;
  bottom: 50%;
  right: 20px;
  position: absolute;
  cursor: pointer;
`;

const PositionImgSlideshow = styled.span`
color = #FFFFFF;
display: inline-block;
bottom: 20px;
left: 50%;
position: absolute;
`;

function Slideshow(props) {
  const nbrTotalImgSlideshow = props.datasPicturesForSlideshow.length;

  // Dans le cas d'une seule image dans le Slideshow, "nbrTotalImgSlideshow === 1" ne permet pas d'afficher les flèches et les bullets points.
  const notShowArrowsAndBulletsPoints = nbrTotalImgSlideshow === 1;

  const [indexImgSlideshow, updateindexImgSlideshow] = useState(0);

  const previousImgSlideshow = () =>
    updateindexImgSlideshow(indexImgSlideshow - 1);

  const nextImgSlideshow = () => updateindexImgSlideshow(indexImgSlideshow + 1);

  // Calcul du firstImgSlideshow : indexImgSlideshow est équivalent à (nbrTotalImgSlideshow - 1) lorsque le clic est effecuté. On retire "1" pour avoir l'index à "0" et donc arriver à la première image du Slideshow
  const firstImgSlideshow = () =>
    updateindexImgSlideshow(nbrTotalImgSlideshow - indexImgSlideshow - 1);

  // Calcul du lastImgSlideshow : indexImgSlideshow est équivalent à "-1" lorsque le clic est effectué. "nbrTotalImgSlideshow -- 1" est équivalent à "nbrTotalImgSlideshow + 1". Puis en retirant "1", on obtient la dernière image du Slideshow.
  const lastImgSlideshow = () =>
    updateindexImgSlideshow(nbrTotalImgSlideshow - indexImgSlideshow - 1);

  return (
    <ContainerSlideshow>
      <ContainersImgsSlideshow
        movePictureSlideshow={indexImgSlideshow}
        datasPicturesForSlideshow={props.datasPicturesForSlideshow}
      />

      {notShowArrowsAndBulletsPoints ? (
        ""
      ) : indexImgSlideshow === 0 ? (
        <PreviousImgSlideshow
          onClick={lastImgSlideshow}
          src={arrow_left}
          alt="Flêche du SlideShow précédent"
        />
      ) : (
        <PreviousImgSlideshow
          onClick={previousImgSlideshow}
          src={arrow_left}
          alt="Flêche du SlideShow précédent"
        />
      )}

      {notShowArrowsAndBulletsPoints ? (
        ""
      ) : indexImgSlideshow === nbrTotalImgSlideshow - 1 ? (
        <NextImgSlideshow
          onClick={firstImgSlideshow}
          src={arrow_right}
          alt="Flêche du SlideShow suivant"
        />
      ) : (
        <NextImgSlideshow
          onClick={nextImgSlideshow}
          src={arrow_right}
          alt="Flêche du SlideShow suivant"
        />
      )}

      {notShowArrowsAndBulletsPoints ? (
        ""
      ) : (
        <PositionImgSlideshow>{`${
          indexImgSlideshow + 1
        }/${nbrTotalImgSlideshow}`}</PositionImgSlideshow>
      )}
    </ContainerSlideshow>
  );
}

export default Slideshow;
