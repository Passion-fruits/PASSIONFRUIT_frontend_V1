import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Header from "./components/header";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header></Header>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
