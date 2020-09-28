import React, { useState, useContext } from "react";
import { Ctx } from "../../contexts/Ctx";
import styled from "styled-components";
import UserKit from "../../data/UserKit";
import Input from "../inputs/Input";
import FilledButton from "../buttons/FilledButton";

const CreateCustomerForm = () => {
  const { setCustomerList } = useContext(Ctx);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState(null);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const userKit = new UserKit();

  function fetchClients() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  function handleCreateCustomer() {
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
      .createCustomer(payload)
      .then(res => res.json())
      .then(fetchClients);
  }

  return (
    <MyComponent>
      <Input
        type="text"
        placeholder="Name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Input
        type="text"
        placeholder="Organisation nr."
        onChange={e => setOrganisationNr(e.target.value)}
        value={organisationNr}
      />
      <Input
        type="text"
        placeholder="Vat nr."
        onChange={e => setVatNr(e.target.value)}
        value={vatNr}
      />
      <Input
        type="text"
        placeholder="Reference"
        onChange={e => setReference(e.target.value)}
        value={reference}
      />
      <Input
        type="text"
        placeholder="Payment Term"
        onChange={e => setPaymentTerm(e.target.value)}
        value={paymentTerm}
      />
      <Input
        type="text"
        placeholder="Website"
        onChange={e => setWebsite(e.target.value)}
        value={website}
      />
      <Input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="tel"
        placeholder="Phone number"
        onChange={e => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
      <FilledButton title="Create customer" onClick={handleCreateCustomer} />
    </MyComponent>
  );
};

export default CreateCustomerForm;

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
