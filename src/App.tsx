import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Feed from "./components/feed";
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
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
