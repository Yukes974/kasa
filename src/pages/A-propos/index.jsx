import Banner from "../../components/Banner";
import banner_apropos from "../../assets/banner_apropos.png";

function Apropos() {
  return (
    <main>
      <Banner
        BannerSource={banner_apropos}
        BannerDescription="banner a propos"
        BannerTitle=""
      />
      <h1>A propos</h1>
    </main>
  );
}

export default Apropos;
