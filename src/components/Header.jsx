import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogoComponent from "./Logo";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px 0 70px 0;
`;

const StyledLogo = styled.div`
  justify-content: flex-start;
`;

const LogoLink = styled(Link)``;

const Nav = styled.nav`
  display: flex;
  width: 250px;
  @media all and (max-width: 767px) {
    width: 200px;
  }
`;

const BlockUl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                fontSize: isActive ? "24px" : "24px",
                color: isActive ? "#ff6060" : "#ff6060",
                textDecorationLine: isActive ? "underline" : "none",
              };
            }}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/apropos"
            style={({ isActive }) => {
              return {
                fontSize: isActive ? "24px" : "24px",
                color: isActive ? "#ff6060" : "#ff6060",
                textDecorationLine: isActive ? "underline" : "none",
              };
            }}
          >
            A Propos
          </NavLink>
        </BlockUl>
      </Nav>
    </NavBar>
  );
}

export default Header;
