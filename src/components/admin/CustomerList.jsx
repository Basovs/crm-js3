import React, { useEffect, useContext } from "react";
import { Ctx } from "../../contexts/Ctx";
import styled from "styled-components";
import UserKit from "../../data/UserKit";
import FilledButton from "../buttons/FilledButton";
import { Link } from "react-router-dom";

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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MyComponent>
      <h2>Customer List</h2>
      <List>
        {customerList &&
          customerList.map((item, index) => (
            <MyItem key={item.id}>
              <Link to={`/customer/${item.id}`}>
                <p>{index + 1}</p>
                <p>{item.name}</p>
              </Link>
              <FilledButton
                title="Delete"
                onClick={() => {
                  deleteClient(item.id);
                }}
              />
            </MyItem>
          ))}
      </List>
    </MyComponent>
  );
};

export default CustomerList;

const MyComponent = styled.div`
  inline-size: 100%;
  max-inline-size: 400px;

  h1 {
    font-size: 22px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const MyItem = styled.div`
  display: flex;
  inline-size: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--light-gray-color);

  margin: 5px 0;
  a {
    display: flex;
    inline-size: 100%;
    padding: 15px 0;
    transition: opacity 0.15s ease-in;
    :hover {
      opacity: 0.6;
    }

    p {
      margin: 0 30px;
    }
  }
`;
