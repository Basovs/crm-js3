import React from "react";
import RegisterForm from "../components/forms/RegisterForm";
import FlexWrapper from "../components/wrappers/FlexWrapper";

const CreateUserPage = () => {
  return (
    <div>
      <FlexWrapper>
        <RegisterForm />
      </FlexWrapper>
    </div>
  );
};

export default CreateUserPage;
