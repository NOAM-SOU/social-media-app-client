import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/searchBar/searchBar";
import Layout from "../../Components/Layout/Layout";
import "./Search.css";
import { UserProfile } from "../../interfaces/user";
import SearchResults from "../../Components/searchResults/searchResults";
import { rootStores } from "../../Stores/main";
const { userStore } = rootStores;

function Search() {
  const { getAllUsers, allUsers } = userStore;

  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<UserProfile[]>();

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    // <Layout>
    <div className="first-div-search-page">
      <SearchBar
        value={{ state: value, setState: setValue }}
        result={{ state: result, setState: setResult }}
      />
      <SearchResults
        value={{ state: value, setState: setValue }}
        result={{ state: result, setState: setResult }}
      />
    </div>
    // </Layout>
  );
}

export default observer(Search);
