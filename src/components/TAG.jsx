import styled from "styled-components";

const BoxTagBar = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const TagBar = styled.div`
  width: 115px;
  height: 25px;
  border-radius: 10px;
  background: #ff6060;
`;

const TagTitle = styled.span`
  color: #ffffff;
`;

function Tag(props) {
  return (
    <BoxTagBar>
      {props.datasTag.map((tag) => {
        return (
          <TagBar>
            <TagTitle>{tag}</TagTitle>
          </TagBar>
        );
      })}
    </BoxTagBar>
  );
}

export default Tag;
