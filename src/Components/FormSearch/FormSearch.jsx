import { observer } from "mobx-react";
import { AiOutlineSearch } from "react-icons/ai";
import rootStores from "../../Stores/main";
import "./FormSearch.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const { USER_STORE } = rootStores;

function FormSearch() {
  const { getAllUsers, allUsers } = USER_STORE;
  useEffect(() => {
    getAllUsers();
  }, []);

  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const search = () => {
    const results = allUsers.filter((u) => {
      return u.name.includes(value);
    });
    setResult(results);
  };
  return (
    <div className="formsearch-first-div">
      <div className="formsearch-deiv-input">
        <AiOutlineSearch />
        <input
          placeholder="Search"
          onChange={(e) => {
            setValue(e.target.value);
            search();
          }}
        />
      </div>
      <div className="formsearch-results-div">
        {result.length === 0
          ? "No users"
          : result.map((u) => {
              return (
                <div className="formsearch-result-ul">
                  <Link to={`/${u._id}`}>
                    <div className="formsearch-result-img">{u.profileImg}</div>
                    <div>{u.name}</div>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default observer(FormSearch);
