import { SubHeaderParams } from "../../../interfaces/feed";
import * as s from "./styles";

export default function SubHeader({title,description}:SubHeaderParams) {
  return (
    <s.FullWrapper>
      <s.Wrapper>
        <s.Container>
          <s.Title>passion fruit</s.Title>
          <s.Description>: music highlights</s.Description>
        </s.Container>
        <s.Container>
          <s.Title>{title}</s.Title>
          <s.Description>{description}</s.Description>
        </s.Container>
      </s.Wrapper>
    </s.FullWrapper>
  );
}
