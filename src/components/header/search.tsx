import * as s from "./styles";

export default function Search() {
  return (
    <s.FlexContainer>
{/*       <s.Logo>
        <b>P</b>assion <b>F</b>ruit
      </s.Logo> */}
      <s.SearchBar>
        <i className="fas fa-search"></i>
        <s.SearchInput placeholder="Search on here you want" />
      </s.SearchBar>
    </s.FlexContainer>
  );
}
