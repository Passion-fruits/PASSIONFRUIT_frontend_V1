import styled, { keyframes } from "styled-components";
import { WaveParams } from "../../../interfaces/feed";
import { COLOR } from "../../../style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-bottom: 1px solid rgb(70, 70, 70);
  padding-bottom: 30px;
  :first-of-type {
    margin-top: 0px;
  }
  :last-of-type {
    margin-bottom: 100px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 80%;
  object-fit: cover;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const ProfileName = styled.span`
  color: white;
  font-size: 12px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
  cursor: pointer;
  position: relative;
  padding: 0;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const CoverImgCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  opacity: 0;
  color: white;
  background: rgb(0, 0, 0, 0.3);
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
`;

export const MusicInforContainer = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  box-sizing: border-box;
  position: relative;
`;

export const TitleWrapper = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 500;
  align-items: center;
`;

export const Genre = styled.div`
  color: gray;
  font-weight: 700;
  font-size: 10px;
  border-radius: 24px;
  padding-top: 10px;
  padding-left: 10px;
  margin-right:10px;
`;

export const Date = styled.span`
  color: gray;
  font-size: 12px;
  margin-top: 5px;
`;

export const MusicDescription = styled.p`
  font-size: 15px;
  color: white;
  margin-top: 17px;
  line-height: 19px;
  letter-spacing: 1px;
`;

export const PlayBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 17px;
  progress {
    width: 100%;
    margin-left: 10px;
    height: 8px;
  }
`;

export const PlayBtn = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 80%;
  background: ${COLOR.MAIN_COLOR};
  border: none;
  color: white;
  transition: 0.5s;
  &:hover {
    background: ${COLOR.HOVER_COLOR};
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 20px;
  .Click {
    background: ${COLOR.MAIN_COLOR};
    color: white;
    &:hover {
      opacity: 1;
      background: ${COLOR.HOVER_COLOR};
    }
    i {
      color: white;
    }
  }
`;

export const Btn = styled.button`
  padding: 3px 12px;
  background: white;
  border: none;
  border-radius: 2px;
  color: black;
  font-size: 11px;
  font-weight: 600;
  margin-left: 13px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
  :first-of-type {
    margin-left: 0;
  }
  i {
    transition: 0.3s;
    color: black;
  }
`;

const WaveAnim = keyframes`
0%{
  height:3px;
}
50%{
  height:13px;
}
100%{
  height:3px;
}
`;

export const Wave = styled.div`
  width: 1px;
  background-color: greenyellow;
  margin-left: 3px;
  transition: 0.5s;
  bottom: 0;
  animation: ${WaveAnim} ${(e: WaveParams) => `${e.second / 10}s`} infinite;
`;
