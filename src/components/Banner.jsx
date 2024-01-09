import styled from "styled-components";
import banner_home from "../assets/banner_home.png";
import banner_apropos from "../assets/banner_apropos.png";

const FormBanner = styled.div`
  display: flex;
  width: 100%;
  height: 223px;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: 0.3;
  background: #000;
  mix-blend-mode: darken;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
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
  const bannerImage =
    props.theme == "home"
      ? { source: banner_home, descriptif: "banner home" }
      : { source: banner_apropos, descriptif: "banner a propos" };
  const HomeH1 =
    props.theme == "home"
      ? { read: "Chez vous, partout et ailleurs" }
      : { read: "" };
  return (
    <FormBanner>
      <CardImage src={bannerImage.source} alt={bannerImage.descriptif} />
      <BannerH1>{HomeH1.read}</BannerH1>
    </FormBanner>
  );
}

export default Banner;
