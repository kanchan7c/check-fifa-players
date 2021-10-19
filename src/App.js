import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile}/>
    </Switch>
    </>
  );
}

export default App;
