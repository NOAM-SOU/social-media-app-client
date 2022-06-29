import { observer } from "mobx-react";
import rootStore from "../../Stores/main";
import Layout from "../../Components/Layout/Layout";
import MyContext from "../../Context/MyContext";
import "./Home.css";
import Posts from "../../Components/Posts/Posts";
import { useContext } from "react";

const { AUTH_STORE } = rootStore;

const Home = () => {
  const { setShow, show } = useContext(MyContext);

  const { user } = AUTH_STORE;

  return (
    <>
      <Layout>
        <div className="first-div-home">
          <div className="div-home-wellcome">Wellcome {user.name}</div>
          <Posts />
        </div>
      </Layout>
    </>
  );
};

export default observer(Home);
