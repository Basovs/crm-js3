import React, { useState, useEffect } from "react"
import styled from "styled-components"
import UserKit from "../../data/UserKit"
import FilledButton from "../buttons/FilledButton"

const CustomerList = () => {
  const [customerList, setCustomerList] = useState(null)
  const userKit = new UserKit()

  function fetchClients() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results)
      })
  }

  function handleCreateCustomer() {
    const payload = {
      name: "My first client",
    }
    userKit
      .createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        fetchClients()
      })
  }

  useEffect(() => {
    fetchClients()
  }, [])
  return (
    <MyComponent>
      <FilledButton title="Create customer" onClick={handleCreateCustomer} />

      {customerList &&
        customerList.map((item) => <p key={item.id}>{item.name}</p>)}
    </MyComponent>
  )
}

export default CustomerList

const MyComponent = styled.div``
