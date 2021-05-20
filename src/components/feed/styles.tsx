import styled from "styled-components";
import { WIDTH } from "../../style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Container = styled.div`
  width: ${WIDTH};
  display: flex;
  justify-content: space-between;
  height: 30px;
  position:relative;
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
