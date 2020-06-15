import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import FirstImage from "../Routes/FirstImage";
import SecondImage from "../Routes/SecondImage";
import ThirdImage from "../Routes/ThirdImage";
import FourthImage from "../Routes/FourthImage";
import FifthImage from "../Routes/FifthImage";
import ThirdSubmit from "../Routes/ThirdSubmit";
import FourthSubmit from "../Routes/FourthSubmit";
import Header from "./Header";

export default () => (
  <Router>
    <Switch>
      <Route path="/1" exact component={FirstImage} />
      <Route path="/2" exact component={SecondImage} />
      <Route path="/3" exact component={ThirdImage} />
      <Route path="/4" exact component={FourthImage} />
      <Route path="/5" exact component={FifthImage} />
      <Route path="/3/submit" exact component={ThirdSubmit} />
      <Route path="/4/submit" exact component={FourthSubmit} />
      <Redirect from="*" to="/1" />
    </Switch>
  </Router>
);
