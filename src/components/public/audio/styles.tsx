import styled from "styled-components";
import { ProgressParams } from "../../../interfaces/feed";
import { COLOR } from "../../../style";

export const PlayBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 24px;
  background-color: rgb(100, 100, 100, 0.6);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition: 0.2s;
  :hover {
    height: 7px;
  }
`;

export const TimeLine = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: blue;
  opacity: 0;
  z-index: 100;
`;

export const Progress = styled.div`
  background-color: ${COLOR.MAIN_COLOR};
  height: 100%;
  transform: ${(e: ProgressParams) => `translateX(-${100 - e.width}%)`};
  width: 100%;
`;
