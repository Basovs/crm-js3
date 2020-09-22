import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <MyComponent>
      <h1>Wellcome to the best CRM ever!</h1>
    </MyComponent>
  );
};

export default Hero;

const MyComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(https://static.npmjs.com/attachments/ck3uwvv67mydydr74ea00ip4j-bg-stripes.png);
  block-size: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: #fff;
    text-align: center;
  }
`;
