import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"
import FlexWrapper from "../components/wrappers/FlexWrapper"

const RegisterPage = () => {
  return (
    <div>
      <FlexWrapper>
        <RegisterForm />
      </FlexWrapper>
    </div>
  )
}

export default RegisterPage
