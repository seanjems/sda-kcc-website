import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import Departments from "./components/pages/Departments";
import Families from "./components/pages/Families";
import Media from "./components/pages/Media";
import More from "./components/pages/More";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/departments" exact component={Departments} />
          <Route path="/families" exact component={Families} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/more" exact component={More} />
          <Route path="/media" exact component={Media} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
