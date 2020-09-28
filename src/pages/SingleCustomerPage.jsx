import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import FilledButton from "../components/buttons/FilledButton";
import { useHistory } from "react-router-dom";
import FlexWrapper from "../components/wrappers/FlexWrapper";
import UpdateCustomerForm from "../components/forms/UpdateCustomerForm";

const SingleCustomerPage = props => {
  const currCustomerId = props.match.params.id;

  const [currCustomer, setCurrCustomer] = useState(null);
  const [updateCustomerState, setUpdateCustomerState] = useState(false);

  const userKit = new UserKit();
  const history = useHistory();

  const deleteClient = () => {
    userKit.deleteCustomer(currCustomerId).then(history.push("/admin"));
  };

  const getCurrCustomer = () => {
    return userKit
      .getCustomer(currCustomerId)
      .then(res => res.json())
      .then(result => setCurrCustomer(result));
  };

  useEffect(() => {
    getCurrCustomer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {currCustomer && (
        <MyComponent>
          <MyFlexWrapper>
            <h1>Customer: {currCustomer.name}</h1>
            <p>
              <strong>Name: </strong>
              {currCustomer.name}
            </p>
            <p>
              <strong>Organisation nr: </strong>
              {currCustomer.organisationNr}
            </p>
            <p>
              <strong>Vat nr: </strong>
              {currCustomer.vatNr}
            </p>
            <p>
              <strong>Reference: </strong>
              {currCustomer.reference}
            </p>
            <p>
              <strong>Payment term: </strong>
              {currCustomer.paymentTerm}
            </p>
            <p>
              <strong>Website: </strong>
              {currCustomer.website}
            </p>
            <p>
              <strong>Email: </strong>
              {currCustomer.email}
            </p>
            <p>
              <strong>Phone number: </strong>
              {currCustomer.phoneNumber}
            </p>
            {!updateCustomerState && (
              <UpdateBtn
                title="Update customer"
                onClick={() => {
                  setUpdateCustomerState(!updateCustomerState);
                }}
              />
            )}
            {updateCustomerState && (
              <UpdateCustomerForm
                currCustomer={currCustomer}
                getCurrCustomer={getCurrCustomer}
                updateCustomerState={updateCustomerState}
                setUpdateCustomerState={setUpdateCustomerState}
              />
            )}
            <DeleteBtn title="Delete customer" onClick={deleteClient} />
            <GoBackBtn title="Go back" onClick={() => history.push("/admin")} />
          </MyFlexWrapper>
        </MyComponent>
      )}
    </>
  );
};

export default SingleCustomerPage;

const MyComponent = styled.div`
  padding: 50px 0;
  p {
    margin: 10px 0;
    font-size: 22px;
  }
  strong {
    font-size: 18px;
  }
`;

const MyFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
  max-inline-size: 400px;
  button {
    inline-size: 100%;
    margin: 10px 0;
  }
`;

const UpdateBtn = styled(FilledButton)`
  background-color: orange;
`;
const DeleteBtn = styled(FilledButton)`
  background-color: red;
`;
const GoBackBtn = styled(FilledButton)`
  background-color: blue;
`;
