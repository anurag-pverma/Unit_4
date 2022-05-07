import styled from "styled-components";

const Button = styled.button`
  border: ${(props) =>
    props.customBorder ? `${props.customBorder}` : "none"};
  border-radius: 4px;
  padding: 10px;
  padding-top: 8px;
  text-align: center;
  background: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : "none"};
  color: ${(props) => (props.customColor ? `${props.customColor}` : "black")};
  cursor: pointer;
  margin: 5px;
  /* 
  &:hover {
    box-shadow: 0px 3px 8px #09bd0c;
  } */
`;

export { Button };
