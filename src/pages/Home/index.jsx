import Banner from "../../components/Banner";
import banner_home from "../../assets/banner_home.png";
import Card from "../../components/Card";
import datasLogementsJson from "../../logements.json";

function Home() {
  return (
    <main>
      <Banner
        bannerSource={banner_home}
        bannerDescription="banner home"
        bannerTitle="Chez vous, partout et ailleurs"
      />
      <Card datasJson={datasLogementsJson} />
    </main>
  );
}

export default Home;
