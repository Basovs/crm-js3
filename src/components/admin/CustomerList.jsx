import React, { useEffect, useContext } from "react";
import { Ctx } from "../../contexts/Ctx";
import styled from "styled-components";
import UserKit from "../../data/UserKit";
import FilledButton from "../buttons/FilledButton";

const CustomerList = () => {
  const { customerList, setCustomerList } = useContext(Ctx);
  const userKit = new UserKit();

  function fetchClients() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  const deleteClient = id => {
    userKit.deleteCustomer(id).then(fetchClients);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <MyComponent>
      {customerList &&
        customerList.map((item, index) => (
          <MyItem key={item.id}>
            <p>{index + 1}</p>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <FilledButton
              title="Delete"
              onClick={() => {
                deleteClient(item.id);
              }}
            />
          </MyItem>
        ))}
    </MyComponent>
  );
};

export default CustomerList;

const MyComponent = styled.div`
  display: flex;
  flex-direction: column-reverse;

  inline-size: 100%;
  max-inline-size: 400px;

  h1 {
    font-size: 22px;
  }
`;
const MyItem = styled.div`
  display: flex;
  inline-size: 100%;
  justify-content: space-between;
  align-items: center;

  margin: 5px 0;
`;
