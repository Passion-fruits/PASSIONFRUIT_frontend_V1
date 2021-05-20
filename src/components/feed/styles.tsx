import styled from "styled-components";
import { WIDTH } from "../../style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${WIDTH};
  display: flex;
  justify-content: space-between;
  height: 30px;
  position: fixed;
  height: 100%;
`;

export const FeedWrapper = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
