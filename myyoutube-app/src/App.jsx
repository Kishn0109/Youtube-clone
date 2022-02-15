import "./App.css";
import "./app.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Sidbar from "./components/sidbar/Sidbar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
function App() {
  return (
    <>
      <Header />
      <div className="app_container">
        <Container fluid className="app_main border-dark d-flex">
          <Sidbar />
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
