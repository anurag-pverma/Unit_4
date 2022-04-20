// import styled from 'styled-components'
// for diffrent way using props
import styled, { css } from "styled-components";

export const Title = styled.p`
  /* background-color: red; */
  font-family: "Times New Roman", Times, serif;
  color: #373f7a;
  margin: 0px;
  padding: 0px;
`;

export const Button = styled.button`
  color: gold;
  /* border: 0ch; */
  height: 40px;
  width: 100px;
  background-color: hotpink;
  color: green;
  border-radius: 5px;
`;
// this is props  in styled components
export const MyButton = styled.button`
  background-color: ${({ primary }) => (primary ? "green" : "blue")};
  color: ${({ primary }) => (primary ? "black" : "white")};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const PrimaryButton = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: grey;
  color: #2f4208;
  height: 50px;
  width: 150px;
  font-weight: bold;

  ${({ danger }) =>
    danger &&
    css`
      background-color: #f6f6f6;
      color: black;
    `}

  ${({ warning }) =>
    warning &&
    css`
      
      color: orange;

      padding: 5px;
    `}

  ${({ success }) =>
    success &&
    css`
    border: 2px  dashed black;
      background-color: #ec0f8c;
      color: #5d4f4f;
    `}
`;

// BigButton property of css 

export const BigButton= styled(MyButton)`
    font-size: 1.2rem;
    background-color: teal;
    color: #471f02;
    height: 50px;
    width: 200px;
    border-radius: 5px;

`