import "./App.css";
import "./app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Sidbar from "./components/sidbar/Sidbar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { useEffect, useState } from "react";
import Login from "./Screens/LoginScreen/Login";
import Counter from "./Screens/Reduxtest/Counter";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
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
          {children}
        </div>
      </div>
    </>
  );
}
function App() {
  const navigate = useNavigate();
  const { accestoken, loading } = useSelector(state => state.user)
  useEffect(() => {
    // console.log(accestoken == null, JSON.parse(accestoken) )
    accestoken==='null' && !loading && navigate("/login")
  }, [accestoken, loading, navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout >
          <HomeScreen />
        </Layout >}>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Layout >
          <>karan</>
        </Layout >} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
    // <Counter/>
  );
}

export default App;
