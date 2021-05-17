import Menu from "./menu";
import * as s from "./styles";

export default function Header() {
  return (
    <s.Wrapper>
      <s.Container>
        <s.Logo>
          <b>P</b>assion <b>F</b>ruit
        </s.Logo>
        <s.SearchBar>
          <i className="fas fa-search"></i>
          <s.SearchInput placeholder="Search on here   ex) boom bap" />
        </s.SearchBar>
      </s.Container>
      <Menu />
    </s.Wrapper>
  );
}
