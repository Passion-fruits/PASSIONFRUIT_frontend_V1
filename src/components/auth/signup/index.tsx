import * as s from "../styles";

export default function SignUp() {
  return (
    <s.Wrapper>
      <s.Container>
        <s.Title style={{marginTop:"100px"}}>SIGN UP</s.Title>
        <s.SubTitle>Welcome to sign up with Passion Fruit.</s.SubTitle>
        <s.SignUpContainer>
          <s.FlexContainer>
              <s.AddImg>
                  <s.Square/>
                  <s.Square />
              </s.AddImg>
            <s.InpWrapper>
              <s.Input placeholder="Enter your E-mail" />
              <s.Input placeholder="Enter your password" type="password" />
              <s.Input placeholder="Enter your E-mail" />
              <s.Input placeholder="Enter your password" type="password" />
            </s.InpWrapper>
          </s.FlexContainer>
          <s.SubBtn style={{width:"100%",marginTop:"50px"}}>SIGN UP</s.SubBtn>
        </s.SignUpContainer>
      </s.Container>
    </s.Wrapper>
  );
}
