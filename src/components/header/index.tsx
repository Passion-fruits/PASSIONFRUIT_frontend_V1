import { useHistory } from "react-router";
import Menu from "./menu";
import Search from "./search";
import * as s from "./styles";

export default function Header() {
    const history = useHistory();
  return (
    <s.Wrapper>
      <s.Container>
        <Search />
        <s.AuthContainer> 
            <s.SignBtn onClick={()=>{history.push('/signin')}}>SIGN IN</s.SignBtn>  
            <s.SignBtn onClick={()=>{history.push('/signup')}}>SIGN UP</s.SignBtn>  
        </s.AuthContainer>
      </s.Container>
      <Menu />
    </s.Wrapper>
  );
}
