import styled from "styled-components";

const FormBanner = styled.div`
  display: flex;
  width: 100%;
  height: 223px;
  margin-bottom: 50px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #000000;
  mix-blend-mode: darken;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  opacity: 0.7;
`;

const BannerH1 = styled.h1`
  position: absolute;
  color: #fff;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 68.448px */
`;

function Banner(props) {
  return (
    <FormBanner>
      <BannerImage src={props.BannerSource} alt={props.BannerDescription} />
      <BannerH1>{props.BannerTitle}</BannerH1>
    </FormBanner>
  );
}

export default Banner;
