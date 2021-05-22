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
  height: 30px;
  height: 100%;
  display: flex;
  position: relative;
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22%;
  width: 850px;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const RecommendWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
`;
