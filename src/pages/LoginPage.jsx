import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import UserKit from "../data/UserKit"
import FlexWrapper from "../components/wrappers/FlexWrapper"
import LoginForm from "../components/forms/LoginForm"

const LoginPage = () => {
  const [uid, setUid] = useState(null)
  const [code, setCode] = useState(null)

  const history = useHistory()
  const params = new URLSearchParams(history.location.search)
  const currentUid = params.get("uid")
  const currentCode = params.get("token")
  // console.log(currentUid, currentCode)

  const userKit = new UserKit()

  function handleActivateAccount() {
    userKit.activateUser(uid, code).then(history.push("/login"))
  }

  useEffect(() => {
    setUid(currentUid)
    setCode(currentCode)
  }, [currentCode, currentUid])

  return (
    <FlexWrapper>
      {uid && code ? (
        <FlexWrapper>
          <h2>Your account is being activated</h2> {handleActivateAccount()}
        </FlexWrapper>
      ) : (
        <LoginForm />
      )}
    </FlexWrapper>
  )
}

export default LoginPage
