
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavebar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import Rightbar from "./components/Rightbar";

const App = () => {
  return (
    <>
    <AppNavebar />
    <Container style={{margin:"0px",padding:"0px"}}>
      <div className="row">
          <div className="col-3 ">
            <Leftbar/>
          </div>
          <div className="col-6 border border-top-0 border-bottom-0 border-info">
            <Main/>
          </div>
          <div className="col-3 ">
            <Rightbar/>
          </div>
      </div>
    </Container>
    
      
    </>
  );
};

export default App;