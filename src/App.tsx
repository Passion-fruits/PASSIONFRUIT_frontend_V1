import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import {
  Header,
  SignIn,
  SignUp,
  Feed,
  Upload,
  Modal,
} from "./components/public/index";

function App() {
  return (
    <>
    <GlobalStyle />
    <Modal/>
      <Router>
        <div style={{paddingTop:"130px"}}>
          <Header></Header>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/upload" component={Upload} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
