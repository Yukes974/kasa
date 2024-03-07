import styled from "styled-components";
import { useState } from "react";
import arrow_back from "../assets/arrow_back_ios-24px 3.png";
import arrow from "../assets/Vector.png";

const BoxCollapseText = styled.div`
  padding: 20px;
  background: #f6f6f6;
`;

const CollapseText = styled.p`
  width: 100%;
  border-radius: 5px;
  margin: 0;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  color: #ff6060;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.6%; /* 34.224px */
  list-style-type: none;
`;

const BoxCollapseTitleArrow = styled.div`
  width: 100%;
  height: 47px;
  background: #ff6060;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
`;

const CollapseTitle = styled.h2`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  color: #ffffff;
  &:hover + ${CollapseText} {
    cursor: pointer;
  }
`;

const BoxCollapse = styled.div`
  min-width: 100%;
  margin-bottom: 50px;
`;

const ImgArrow = styled.img`
  width: 24px;
  height: 13px;
`;

const ImgArrowBack = styled.img`
  width: 32px;
  height: 32px;
`;

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <BoxCollapse>
      <BoxCollapseTitleArrow onClick={() => setIsOpen(!isOpen)}>
        <CollapseTitle>{props.collapseTitle} </CollapseTitle>
        {isOpen ? (
          <ImgArrow src={arrow} alt=" flêche dirigée vers le haut" />
        ) : (
          <ImgArrowBack src={arrow_back} alt="flêche dirigée vers le bas" />
        )}
      </BoxCollapseTitleArrow>

      {isOpen ? (
        typeof props.collapseText == "string" ? (
          <BoxCollapseText>
            <CollapseText>{props.collapseText}</CollapseText>
          </BoxCollapseText>
        ) : (
          <BoxCollapseText>
            <CollapseText>
              {props.collapseText.map((li) => {
                return <li>{li}</li>;
              })}
            </CollapseText>
          </BoxCollapseText>
        )
      ) : (
        ""
      )}
    </BoxCollapse>
  );
}

export default Collapse;
