import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
