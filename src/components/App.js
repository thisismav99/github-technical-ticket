import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./signup/Signup";
import About from "./About";
import Login from "./login/Login";
import Dashboard from "./dashboard/Dashboard";
import useSignedIn from "../hooks/useSignedIn";

function App() {
  const { signedIn } = useSignedIn("app");

  return (
    <>
      <Router>
        <Navbar signedIn={signedIn} />

        <Switch>
          <Route exact path="/">
            { signedIn ? <Redirect to="/dashboard" /> : <About/> }
          </Route>

          <Route path="/signup">
            { signedIn ? <Redirect to="/dashboard" /> : <Signup /> }
          </Route>

          <Route path="/login">
            { signedIn ? <Redirect to="/dashboard" /> : <Login /> }
          </Route>

          <Route path="/dashboard">
            { signedIn ? <Dashboard /> : <Redirect to="/" /> }
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;