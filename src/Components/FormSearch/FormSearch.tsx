import { observer } from "mobx-react";
import { rootStores } from "../../Stores/main";
import "./FormSearch.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { UserProfile } from "../../interfaces/user";
const { userStore } = rootStores;

function FormSearch() {
  const { getAllUsers, allUsers } = userStore;
  useEffect(() => {
    getAllUsers();
  }, []);

  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<UserProfile[]>();

  const search = () => {
    const results = allUsers.filter((u) => {
      return u.name.includes(value);
    });
    setResult(results);
  };
  return (
    <div className="formsearch-first-div">
      <div className="formsearch-deiv-input">
        <input
          id="input-search-form"
          placeholder="Search"
          onChange={(e) => {
            setValue(e.target.value);
            search();
          }}
        />
      </div>
      <div className="formsearch-results-div">
        {value.length === 0 ? (
          <div className="div-no-results">No searches</div>
        ) : result?.length === 0 ? (
          <div className="div-no-results">No users</div>
        ) : (
          result?.map((u) => {
            return (
              <div className="formsearch-result-ul">
                <Link to={`/${u._id}`}>
                  <div className="div-img-result-searchform">
                    <img
                      className="formsearch-result-img"
                      src={u.profileImg}
                      alt="post"
                    />
                  </div>
                  <div className="div-name-formsearch">{u.name}</div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default observer(FormSearch);
