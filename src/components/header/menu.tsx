import * as s from "./styles";

export default function Menu() {
  return (
    <s.Container>
      <s.Menu to="/home" activeClassName="active">
        Main<i className="fas fa-check-circle"></i>
      </s.Menu>
      <s.Menu exact to="/feed" activeClassName="active">
        Feed
      </s.Menu>
      <s.Menu to="/chart" activeClassName="active">
        Top Chart
      </s.Menu>
      <s.Menu to="/stream" activeClassName="active">
        Streaming<i className="fas fa-headphones"></i>
      </s.Menu>
      <s.Menu to="/about" activeClassName="active">
        About us
      </s.Menu>
    </s.Container>
  );
}
