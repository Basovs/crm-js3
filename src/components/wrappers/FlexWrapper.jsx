import React from "react";
import styled from "styled-components";

const FlexWrapper = ({ className, children }) => {
  return <MyComponent className={className}>{children}</MyComponent>;
};

export default FlexWrapper;

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  inline-size: 100%;
  max-inline-size: 1700px;
  margin: 0 auto;
  padding: 0 20px;
`;
