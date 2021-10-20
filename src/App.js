import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Player_Data  from "./Components/Player_Data";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
       <Route exact path="/Player_Data/:Name" component={Player_Data} />
    </Switch>
    </>
  );
}

export default App;
