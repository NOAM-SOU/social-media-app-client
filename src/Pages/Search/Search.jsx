import { observer } from "mobx-react";
import FormSearch from "../../Components/FormSearch/FormSearch";
import Layout from "../../Components/Layout/Layout";

function Search() {
  return (
    <Layout>
      <div>
        <h1>Search</h1>
        <FormSearch />
      </div>
    </Layout>
  );
}

export default observer(Search);
