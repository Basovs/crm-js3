import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import FlexWrapper from "../wrappers/FlexWrapper"
import UserKit from "../../data/UserKit"

const Nav = () => {
  const userKit = new UserKit()

  const tokenExist = userKit.getToken()

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
            </>
          )}
        </ul>
      </FlexWrapper>
    </MyComponent>
  )
}

export default Nav

const MyComponent = styled.nav`
  display: flex;
  align-items: center;

  block-size: 50px;
  border-bottom: 1px solid var(--stripe-color);
  background-color: #fff;

  ul {
    display: flex;
    li {
      margin: 0 0 0 20px;
      transition: opacity 0.15s ease-in;
      :hover {
        opacity: 0.6;
      }
      a {
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.4px;
      }
    }
  }
`
