import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FlexWrapper from "../wrappers/FlexWrapper";
import UserKit from "../../data/UserKit";
import AboutMe from "../info/AboutMe";

const Nav = () => {
  const userKit = new UserKit();

  const tokenExist = userKit.getToken();

  return (
    <MyComponent>
      <FlexWrapper>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!tokenExist ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/" onClick={() => userKit.logout()}>
                  Logout
                </Link>
              </li>
              <li>
                <AboutMe />
              </li>
            </>
          )}
        </ul>
      </FlexWrapper>
    </MyComponent>
  );
};

export default Nav;

const MyComponent = styled.nav`
  display: flex;
  align-items: center;

  padding: 20px 20px;
  border-bottom: 1px solid var(--stripe-color);
  background-color: #fff;

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 0 0 0 20px;
      transition: opacity 0.15s ease-in;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.4px;
      :hover {
        opacity: 0.6;
      }
    }
  }
`;
