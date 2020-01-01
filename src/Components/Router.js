import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Footer from "./Footer";
import Home from "../Routes/Home";
import Application from "../Routes/Application";
import Game from "../Routes/Game";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/application" exact component={Application} />
        <Route path="/game" exact component={Game} />
        <Route path="/search" component={Search} />
        <Route path="/application/:id" component={Detail} />
        <Route path="/game/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);