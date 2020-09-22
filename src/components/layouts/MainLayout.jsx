import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import MainHeader from "../headers/MainHeader";
import Footer from "../footers/Footer";
import DecorationLine from "../decorations/DecorationLine";

const MainLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>React Helmet</title>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,800"
          rel="stylesheet"
        />
      </Helmet>
      <MyComponent>
        <DecorationLine />
        <MainHeader />
        <MyMain>{children}</MyMain>
        <Footer />
        <DecorationLine />
      </MyComponent>
    </>
  );
};

export default MainLayout;

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;

  min-block-size: 100vh;
`;

const MyMain = styled.main`
  flex-grow: 1;
`;
