import styled from "styled-components";
import LogoComponent from "./Logo";

const FooterFont = styled.div`
  display: flex;
  width: 100%;
  margin-top: 70px;
  padding: 66px 0 29px 0;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 28.556px;
  background: #000;
`;

const FooterCopyright = styled.h4`
  color: white;
`;

function Footer() {
  return (
    <FooterFont>
      <div>
        <LogoComponent theme="dark" />
      </div>
      <FooterCopyright>© 2020 Kasa. All rights reserved</FooterCopyright>
    </FooterFont>
  );
}

export default Footer;
