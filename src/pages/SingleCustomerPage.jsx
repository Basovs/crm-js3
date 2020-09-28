import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import FilledButton from "../components/buttons/FilledButton";
import { useHistory } from "react-router-dom";
import FlexWrapper from "../components/wrappers/FlexWrapper";

const SingleCustomerPage = props => {
  const currCustomerId = props.match.params.id;

  const [currCustomer, setCurrCustomer] = useState(null);

  const userKit = new UserKit();
  const history = useHistory();

  const deleteClient = () => {
    userKit.deleteCustomer(currCustomerId).then(history.push("/admin"));
  };

  useEffect(() => {
    userKit
      .getCustomer(currCustomerId)
      .then(res => res.json())
      .then(result => setCurrCustomer(result));
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
            <FilledButton title="Delete customer" onClick={deleteClient} />
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
  }
`;

const MyFlexWrapper = styled(FlexWrapper)`
  align-items: flex-start;
  max-inline-size: 400px;
`;
