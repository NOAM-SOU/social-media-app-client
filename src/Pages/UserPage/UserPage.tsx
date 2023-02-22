import { observer } from "mobx-react";
import React from "react";
import FormUserPage from "../../Components/FormUserPage/FormUserPage";
import Layout from "../../Components/Layout/Layout";
import "./UserPage.css";

function UserPage() {
  return (
    // <Layout>
    <div className="userpage-first-div">
      <div>
        <FormUserPage />
      </div>
    </div>
    // </Layout>
  );
}

export default observer(UserPage);
