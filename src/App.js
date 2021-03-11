import Home from "./components/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
        <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/teamdetails/:teamId">
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
