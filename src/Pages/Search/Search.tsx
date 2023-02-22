import { observer } from "mobx-react";
import React from "react";
import FormSearch from "../../Components/FormSearch/FormSearch.js";
import Layout from "../../Components/Layout/Layout";
import "./Search.css";

function Search() {
  return (
    // <Layout>
    <div className="first-div-search-page">
      <FormSearch />
    </div>
    // </Layout>
  );
}

export default observer(Search);
