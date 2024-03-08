import styled from "styled-components";

const ImgSlideShow = styled.img`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`;

function ImgsSlideshow(props) {
  return (
    <ImgSlideShow
      src={props.pictureSlideshow}
      alt="Image du slideshow actuel"
    />
  );
}

export default ImgsSlideshow;
