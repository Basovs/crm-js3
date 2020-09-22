import React, { useState } from "react";
import userKit from "../../data/UserKit";
import styled from "styled-components";
import Input from "../inputs/Input";
import FilledButton from "../buttons/FilledButton";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  function handleRegister() {
    console.log("clicked");
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }

  return (
    <MyComponent>
      <h1>Create user</h1>
      <Input
        type="text"
        placeholder="First name"
        onChange={e => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Last name"
        onChange={e => setLastName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Organisation"
        onChange={e => setOrganisationName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Organisation kind"
        onChange={e => setOrganisationKind(e.target.value)}
      />
      <MyFilledButton title="Register" onClick={handleRegister} />
    </MyComponent>
  );
};

export default RegisterForm;

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;

  inline-size: 100%;
  max-inline-size: 400px;
  padding: 50px 0;
  h1 {
    font-size: 22px;
  }
`;

const MyFilledButton = styled(FilledButton)``;
