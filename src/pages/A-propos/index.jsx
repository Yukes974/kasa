import Banner from "../../components/Banner";
import banner_apropos from "../../assets/banner_apropos.png";

function Apropos() {
  return (
    <main>
      <Banner Source={banner_apropos} Description="banner a propos" Read="" />
      <h1>A propos</h1>
    </main>
  );
}

export default Apropos;
