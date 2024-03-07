import styled from "styled-components";
import { useParams } from "react-router-dom";
import datasLogementsJson from "../../logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Tag from "../../components/TAG";
import Star from "../../components/Star";
import Collapse from "../../components/Collapse";
import Error404 from "../../components/Error";

const Main = styled.main`
  overflow: hidden;
`;

const SectionLogementHost = styled.section`
  display: flex;
`;

const BoxNamePictureHost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxPictureHost = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background: #c4c4c4;
`;

const PictureHost = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
`;

const SectionDetailLogement = styled.section`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 340px;
  gap: 50px;
`;

const SectionLogement = styled.section`
  width: 80%;
`;

const SectionHost = styled.section`
  width: 20%;
`;

function Logement() {
  const { id } = useParams();
  const datasFicheLogement = datasLogementsJson.filter((logement) => {
    return logement.id === id;
  })[0];

  return datasFicheLogement ? (
    <Main>
      <Slideshow datasPicturesForSlideshow={datasFicheLogement.pictures} />
      <SectionLogementHost>
        <SectionLogement>
          <h1>{datasFicheLogement.title}</h1>
          <h2>{datasFicheLogement.location}</h2>
          <Tag datasTag={datasFicheLogement.tags} />
        </SectionLogement>
        <SectionHost>
          <BoxNamePictureHost>
            <span>{datasFicheLogement.host.name}</span>
            <BoxPictureHost>
              <PictureHost
                src={datasFicheLogement.host.picture}
                alt="Photos de l'hébergeur"
              />
            </BoxPictureHost>
          </BoxNamePictureHost>
          <Star datasRating={datasFicheLogement.rating} />
        </SectionHost>
      </SectionLogementHost>

      <SectionDetailLogement>
        <Collapse
          collapseTitle="Description"
          collapseText={datasFicheLogement.description}
        ></Collapse>
        <Collapse
          collapseTitle="Equipements"
          collapseText={datasFicheLogement.equipments}
        ></Collapse>
      </SectionDetailLogement>
    </Main>
  ) : (
    <Error404 />
  );
}

export default Logement;
