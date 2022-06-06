import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="App container">
      <SignUp />
    </div>
  );
}

export default observer(App);
