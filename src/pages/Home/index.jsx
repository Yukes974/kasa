import styled from "styled-components";
import Banner from "../../components/Banner";
import banner_home from "../../assets/banner_home.png";
import Card from "../../components/Card";
import datas from "../../logements.json";

const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  border-radius: 10px;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 340px 340px 340px 340px 340px 340px 340px;
  gap: 40px;
`;

function Home() {
  return (
    <main>
      <Banner
        BannerSource={banner_home}
        BannerDescription="banner home"
        BannerTitle="Chez vous, partout et ailleurs"
      />
      <ContainerCard>
        {datas.map((logement, index) => {
          return (
            <Card
              Key={`${logement.host.name}-${index}`}
              CardTitle={logement.title}
              CardImage={logement.cover}
            />
          );
        })}
      </ContainerCard>
    </main>
  );
}

export default Home;
