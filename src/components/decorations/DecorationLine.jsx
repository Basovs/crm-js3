import React from "react";
import styled from "styled-components";

const DecorationLine = () => {
  return <MyComponent />;
};

export default DecorationLine;

const MyComponent = styled.section`
  block-size: 10px;
  background: rgb(253, 248, 91);
  background: linear-gradient(
    90deg,
    rgba(253, 248, 91, 1) 0%,
    rgba(91, 253, 132, 1) 37%,
    rgba(55, 210, 129, 1) 100%
  );
`;
