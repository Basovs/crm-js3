import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import UserKit from "../../data/UserKit"
import FilledButton from "../buttons/FilledButton"
import Input from "../inputs/Input"
import FlexWrapper from "../wrappers/FlexWrapper"
import styled from "styled-components"

const ActivateForm = ({ uid, code }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const userKit = new UserKit()
  const history = useHistory()

  function handleLogin() {
    userKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        userKit.setToken(data.token)
        history.push("/home")
      })
  }

  return (
    <div>
      <MyFlexWrapper>
        <h1>Login</h1>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FilledButton title="Login" onClick={handleLogin} />
      </MyFlexWrapper>
    </div>
  )
}

export default ActivateForm

const MyFlexWrapper = styled(FlexWrapper)`
  flex-direction: column;
`
