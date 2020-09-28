import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import UserKit from "../../data/UserKit";
import FilledButton from "../buttons/FilledButton";
import Input from "../inputs/Input";
import styled from "styled-components";

const ActivateForm = ({ uid, code }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const userKit = new UserKit();
  const history = useHistory();

  function handleLogin() {
    userKit
      .login(email, password)
      .then(res => res.json())
      .then(data => {
        userKit.setToken(data.token);
        history.push("/admin");
      });
  }

  return (
    <MyComponent>
      <p>
        Not a user yet? -
        <Link to="/register">
          <span>Register here</span>
        </Link>
      </p>

      <h1>Login</h1>
      <Input
        type="text"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <FilledButton title="Login" onClick={handleLogin} />
    </MyComponent>
  );
};

export default ActivateForm;

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;

  inline-size: 100%;
  max-inline-size: 400px;
  padding: 30px 0;
  h1 {
    font-size: 22px;
  }
  p {
    font-size: 14px;
    a {
      text-decoration: underline;
    }
  }
`;
