import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import LoginForm from "../components/forms/LoginForm"
import UserKit from "../data/UserKit"

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
    <div>
      {uid && code ? (
        <div>
          <h2>Your account is being activated</h2> {handleActivateAccount()}
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default LoginPage
