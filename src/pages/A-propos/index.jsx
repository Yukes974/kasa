import Banner from "../../components/Banner";
import banner_apropos from "../../assets/banner_apropos.png";
import Collapse from "../../components/Collapse";
import aproposJson from "../../apropos.json";
import styled from "styled-components";

const SectionCollapse = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Apropos() {
  return (
    <main>
      <section>
        <Banner
          bannerSource={banner_apropos}
          bannerDescription="banner a propos"
          bannerTitle=""
        />
      </section>
      <SectionCollapse>
        {aproposJson.map((question) => {
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
