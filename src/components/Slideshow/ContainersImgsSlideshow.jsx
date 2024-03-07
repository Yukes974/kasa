import styled from "styled-components";
import ImgsSlideshow from "./ImgsSlideshow";

const ContainerImgsSlideshow = styled.div`
  display: flex;
  width: calc(${(props) => props.datasPicturesForSlideshow.length} * 100%);
  height: 415px;
  position: relative;
  transform: translateX(calc(${(props) => props.movePictureSlideshow} * -100%));
  transition: 0.5s all;
`;

function ContainersImgsSlideshow(props) {
  return (
    <ContainerImgsSlideshow
      datasPicturesForSlideshow={props.datasPicturesForSlideshow}
      movePictureSlideshow={props.movePictureSlideshow}
    >
      {props.datasPicturesForSlideshow.map((picture, index) => {
        return (
          <ImgsSlideshow key={index} pictureSlideShow={picture}></ImgsSlideshow>
        );
      })}
    </ContainerImgsSlideshow>
  );
}

export default ContainersImgsSlideshow;
