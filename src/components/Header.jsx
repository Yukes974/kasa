import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "./Logo";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledLogo = styled.div`
  justify-content: flex-start;
`;

const LogoLink = styled(Link)``;

const Nav = styled.nav`
  display: flex;
  width: 20%;
`;

const BlockUl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: #ff6060;
  justify-content: flex-end;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */
  text-decoration-line: none;
`;

function Header() {
  return (
    <NavBar>
      <StyledLogo>
        <LogoLink to="/">
          <LogoComponent theme="light" />
        </LogoLink>
      </StyledLogo>
      <Nav>
        <BlockUl>
          <StyledLink to="/">Accueil</StyledLink>

          <StyledLink to="/apropos">A Propos</StyledLink>
        </BlockUl>
      </Nav>
    </NavBar>
  );
}

export default Header;
