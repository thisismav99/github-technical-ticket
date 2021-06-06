import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./signup/Signup";
import About from "./About";
import Login from "./login/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <About/>
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;