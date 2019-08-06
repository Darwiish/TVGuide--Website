import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ListOfPrograms from "./components/ListOfPrograms";
import UserLogin from "./components/UserLogin";
import TvChannels from "./components/TvChannels";
import ProgramPage from "./components/ProgramPage";
import PostProgram from "./components/PostProgram";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">TV Guide</div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/postProgram"} className="nav-link">
                  Post Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/loginpage"} className="nav-link">
                  LoginPage
                </Link>{" "}
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route exact path="/loginpage" render={props => <UserLogin />} />
          <Route exact path="/postProgram" render={props => <PostProgram />} />
          <Route
            exact
            path="/program/allprograms"
            render={props => <ListOfPrograms />}
          />
          <Route exact path="/" render={props => <TvChannels />} />
          <Route
            path="/show-program/:id"
            render={props => <ProgramPage {...props} />}
          />
          <Route
            path="/channel/:chan"
            render={props => <ProgramPage {...props} />}
          />
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
