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
  const [indexImgSlideShow, updateIndexImgSlideShow] = useState(0);
  const previousImgSlideshow = () =>
    updateIndexImgSlideShow(indexImgSlideShow - 1);
  const nextImgSlideshow = () => updateIndexImgSlideShow(indexImgSlideShow + 1);
  const firstImgSlideshow = () =>
    updateIndexImgSlideShow(indexImgSlideShow - nbrTotalImgSlideshow + 1);
  const lastImgSlideshow = () =>
    updateIndexImgSlideShow(nbrTotalImgSlideshow - indexImgSlideShow - 1);
  console.log(indexImgSlideShow);
  return (
    <ContainerSlideshow>
      <ContainersImgsSlideshow
        movePictureSlideshow={indexImgSlideShow}
        datasPicturesForSlideshow={props.datasPicturesForSlideshow}
      />
      {nbrTotalImgSlideshow === 1 ? (
        ""
      ) : indexImgSlideShow === 0 ? (
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

      {nbrTotalImgSlideshow === 1 ? (
        ""
      ) : indexImgSlideShow === nbrTotalImgSlideshow - 1 ? (
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

      <PositionImgSlideshow>{`${
        indexImgSlideShow + 1
      }/${nbrTotalImgSlideshow}`}</PositionImgSlideshow>
    </ContainerSlideshow>
  );
}

export default Slideshow;
