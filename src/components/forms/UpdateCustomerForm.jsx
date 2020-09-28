import React, { useState } from "react";
import styled from "styled-components";
import UserKit from "../../data/UserKit";
import Input from "../inputs/Input";
import FilledButton from "../buttons/FilledButton";
import { useHistory } from "react-router-dom";

const UpdateCustomerForm = ({
  currCustomer,
  getCurrCustomer,
  updateCustomerState,
  setUpdateCustomerState,
}) => {
  const [name, setName] = useState(currCustomer.name);
  const [organisationNr, setOrganisationNr] = useState(
    currCustomer.organisationNr
  );
  const [vatNr, setVatNr] = useState(currCustomer.vatNr);
  const [reference, setReference] = useState(currCustomer.reference);
  const [paymentTerm, setPaymentTerm] = useState(currCustomer.paymentTerm);
  const [website, setWebsite] = useState(currCustomer.website);
  const [email, setEmail] = useState(currCustomer.email);
  const [phoneNumber, setPhoneNumber] = useState(currCustomer.phoneNumber);

  const currCustomerId = currCustomer.id;

  const history = useHistory();
  const userKit = new UserKit();

  function handleUpdateCustomer() {
    const payload = {
      name,
      organisationNr,
      vatNr,
      reference,
      paymentTerm,
      website,
      email,
      phoneNumber,
    };
    userKit
      .updateCustomer(currCustomerId, payload)
      .then(res => res.json())
      .then(history.push(`/customer/${currCustomerId}`))
      .then(setUpdateCustomerState(!updateCustomerState))
      .then(getCurrCustomer())
      .then(
        setTimeout(() => {
          history.go(0);
        }, 100)
      );
  }

  return (
    <MyComponent>
      <Input
        type="text"
        placeholder={currCustomer.name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder={currCustomer.organisationNr}
        onChange={e => setOrganisationNr(e.target.value)}
      />
      <Input
        type="text"
        placeholder={currCustomer.vatNr}
        onChange={e => setVatNr(e.target.value)}
      />
      <Input
        type="text"
        placeholder={currCustomer.reference}
        onChange={e => setReference(e.target.value)}
      />
      <Input
        type="text"
        placeholder={currCustomer.paymentTerm}
        onChange={e => setPaymentTerm(e.target.value)}
      />
      <Input
        type="text"
        placeholder={currCustomer.website}
        onChange={e => setWebsite(e.target.value)}
      />
      <Input
        type="email"
        placeholder={currCustomer.email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        placeholder={currCustomer.phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <CancelBtn
        title="Cancel update"
        onClick={() => setUpdateCustomerState(!updateCustomerState)}
      />
      <UpdateBtn title="Update customer" onClick={handleUpdateCustomer} />
    </MyComponent>
  );
};

export default UpdateCustomerForm;

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
const CancelBtn = styled(FilledButton)`
  background-color: orange;
  color: #111;
`;
const UpdateBtn = styled(FilledButton)`
  background-color: green;
`;
