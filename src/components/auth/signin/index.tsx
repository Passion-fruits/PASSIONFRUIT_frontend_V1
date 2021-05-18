import * as s from "../styles";

export default function SignIn() {
  return (
    <s.Wrapper>
      <s.Container>
        <s.Title>SIGN IN</s.Title>
        <s.SubTitle>Welcome to login with Passion Fruit.</s.SubTitle>
        <s.Input placeholder="Enter your E-mail" />
        <s.Input placeholder="Enter your password" type="password" />
        <s.SubBtn>SIGN IN</s.SubBtn>
        <s.BottomSpan to="signup">Don't have an account?</s.BottomSpan>
      </s.Container>
    </s.Wrapper>
  );
}
