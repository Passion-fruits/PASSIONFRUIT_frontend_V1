import * as s from "./styles";

export default function Menu() {
  return (
    <s.Container>
      <s.Menu to="/home" activeClassName="active">
        HOME<i className="fas fa-check-circle"></i>
      </s.Menu>
      <s.Menu exact to="/feed" activeClassName="active">
        FEED
      </s.Menu>
      <s.Menu to="/chart" activeClassName="active">
        CHART
      </s.Menu>
      <s.Menu to="/stream" activeClassName="active">
        STREAMING<i className="fas fa-headphones"></i>
      </s.Menu>
      <s.Menu to="/about" activeClassName="active">
        ABOUT US
      </s.Menu>
    </s.Container>
  );
}
