import "./App.css";
import "./app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Sidbar from "./components/sidbar/Sidbar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { useState } from "react";
function App() {
  const [toggelSidebar, settoggelsidebar] = useState(false);
  const handeltoggelsidebar = () => {
    console.log("line 12");
    settoggelsidebar(!toggelSidebar);
  };
  return (
    <>
      <Header toggelfunction={handeltoggelsidebar} />
      <div className="app_container">
        <div className="app_main border-dark d-flex p-0 w-100">
          <Sidbar
            toggelSidebar={toggelSidebar}
            toggelfunction={handeltoggelsidebar}
          />
          <HomeScreen />
        </div>
      </div>
    </>
  );
}

export default App;
