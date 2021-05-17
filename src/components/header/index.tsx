import Menu from "./menu";
import Search from "./search";
import * as s from "./styles";

export default function Header() {
  return (
    <s.Wrapper>
      <s.Container>
        <Search />
        <s.AuthContainer> 
            <s.SignBtn>SIGN IN</s.SignBtn>  
            <s.SignBtn>SIGN UP</s.SignBtn>  
        </s.AuthContainer>
      </s.Container>
      <Menu />
    </s.Wrapper>
  );
}
