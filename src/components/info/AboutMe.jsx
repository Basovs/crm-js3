import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserKit from "../../data/UserKit";

const AboutMe = () => {
  const [meData, setMeData] = useState(null);

  const userKit = new UserKit();

  const aboutMe = () => {
    return userKit
      .getMe()
      .then(res => res.json())
      .then(result => setMeData(result));
  };

  useEffect(() => {
    aboutMe();
  }, []);

  return (
    <MyComponent>
      {meData && (
        <p>{`Hello ${meData.firstName} ${meData.lastName} - ${meData.email}`}</p>
      )}
    </MyComponent>
  );
};

export default AboutMe;

const MyComponent = styled.div`
  p {
    margin: 0 0 0 30px;
  }
`;
