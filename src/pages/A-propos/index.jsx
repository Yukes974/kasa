import styled from "styled-components";
import Banner from "../../components/Banner";
import banner_apropos from "../../assets/banner_apropos.png";
import Collapse from "../../components/Collapse";
import datasAproposJson from "../../apropos.json";

const SectionCollapse = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px 0 100px;
  @media all and (max-width: 767px) {
    padding: 0;
  }
`;

function Apropos() {
  return (
    <main>
      <section>
        <Banner
          bannerSource={banner_apropos}
          bannerDescription="banner a propos"
          bannerTitle="A Propos"
        />
      </section>
      <SectionCollapse>
        {datasAproposJson.map((question) => {
          return (
            <Collapse
              collapseTitle={question.title}
              collapseText={question.text}
            />
          );
        })}
      </SectionCollapse>
    </main>
  );
}

export default Apropos;
