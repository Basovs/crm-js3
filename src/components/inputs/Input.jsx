import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  return <MyComponent type={type} placeholder={placeholder}></MyComponent>;
};

export default Input;

const MyComponent = styled.input`
  block-size: 52px;
  margin: 0 0 10px;
  background-color: var(--light-gray-color);
  border: 1px solid var(--light-gray-color);
  padding: 0 0 0 20px;
  inline-size: 100%;
  font-size: 14px;
  :focus {
    border: 1px solid var(--dark-gray-color);
  }
  ::placeholder {
    color: var(--mid-gray-color);
    opacity: 1; /* Firefox */
    font-weight: 300;
  }
`;
