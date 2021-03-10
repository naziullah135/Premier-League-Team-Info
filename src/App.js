import Home from "./components/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Team from "./components/Team/Team";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/teamdetails">
          <TeamDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
