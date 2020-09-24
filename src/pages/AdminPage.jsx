import React from "react";
import CustomerList from "../components/admin/CustomerList";
import CreateCustomerForm from "../components/forms/CreateCustomerForm";
import FlexWrapper from "../components/wrappers/FlexWrapper";

const AdminPage = () => {
  return (
    <div>
      <FlexWrapper>
        <h2>AdminPage</h2>
        <CreateCustomerForm />
        <CustomerList />
      </FlexWrapper>
    </div>
  );
};

export default AdminPage;
