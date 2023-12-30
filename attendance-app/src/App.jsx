import React from "react";
import Container from "./components/Container";
import Icon from "./components/Icon";
import Input from "./components/Input";
import LogIn from "./components/LogIn";
import "./scss/app.scss";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CurrentDate from "./components/CurrentDate";

function App() {
  return (
    <>
      <Container>
        <CurrentDate />
        <Icon image="./src/assets/icons/clock.png" alt="Clock" />
        {/* <Input label="First Name" type="text" id="firstName" /> */}
        <LogIn></LogIn>
      </Container>
    </>
  );
}

export default App;
