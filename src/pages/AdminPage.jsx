import React from "react"
import CustomerList from "../components/admin/CustomerList"
import FlexWrapper from "../components/wrappers/FlexWrapper"

const AdminPage = () => {
  return (
    <div>
      <FlexWrapper>
        <h2>AdminPage</h2>
        <CustomerList />
      </FlexWrapper>
    </div>
  )
}

export default AdminPage
