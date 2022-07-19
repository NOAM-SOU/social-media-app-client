import { observer } from "mobx-react";
import FormUserPage from "../../Components/FormUserPage";
import Layout from "../../Components/Layout";
import "./UserPage.css";

function UserPage() {
  return (
    <Layout>
      <div className="userpage-first-div">
        <div>
          <FormUserPage />
        </div>
      </div>
    </Layout>
  );
}

export default observer(UserPage);
