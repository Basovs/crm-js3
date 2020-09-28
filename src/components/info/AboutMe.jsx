import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import UserKit from "../../data/UserKit";
import { Ctx } from "../../contexts/Ctx";

const AboutUser = () => {
  const { user, setUser } = useContext(Ctx);

  const userKit = new UserKit();

  const aboutUser = () => {
    return userKit
      .getUser()
      .then(res => res.json())
      .then(result => setUser(result));
  };

  useEffect(() => {
    aboutUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MyComponent>
      {user && (
        <p>{`Hello ${user.firstName} ${user.lastName} - ${user.email}`}</p>
      )}
    </MyComponent>
  );
};

export default AboutUser;

const MyComponent = styled.div`
  p {
    margin: 0 0 0 30px;
  }
`;
