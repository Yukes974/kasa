import { Link } from "react-router-dom";
import styled from "styled-components";

const Main404 = styled.main`
  display: flex;
  flex-direction: column;
`;

const Error404Title = styled.h1`
  display: flex;
  width: 100%;
  height: 263px;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #ff6060;
  text-align: center;
  font-family: Montserrat;
  font-size: 288px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 410.688px */
`;

const H2Title = styled.h2`
  text-align: center;
  margin-bottom: 120px;
  color: #ff6060;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 51.336px */
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  margin-bottom: 100px;
  color: #ff6060;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */
  text-decoration-line: underline;
`;

function Error() {
  return (
    <Main404>
      <Error404Title>404</Error404Title>
      <H2Title>Oups! La page que vous demandez n'existe pas.</H2Title>
      <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
    </Main404>
  );
}

export default Error;
