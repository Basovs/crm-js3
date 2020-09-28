import React from "react";
import styled from "styled-components";

const FilledButton = ({ className, title, onClick }) => {
  return (
    <MyComponent className={className} onClick={onClick}>
      {title}
    </MyComponent>
  );
};

export default FilledButton;

const MyComponent = styled.button`
  background-color: var(--dark-gray-color);
  font-weight: bold;
  letter-spacing: 0.2px;
  color: #fff;
  padding: 0 32px;
  block-size: 52px;
`;
