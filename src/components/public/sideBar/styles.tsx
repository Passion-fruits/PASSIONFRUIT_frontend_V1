import styled from "styled-components";
import { COLOR } from "../../../style";

export const Wrapper = styled.div`
  width: 13%;
  position:fixed;
`;

export const SelectTitle = styled.label`
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

export const SelectBox = styled.select`
  width: 100%;
  padding: 7px 25px;
  background: ${COLOR.BACKGROUND_COLOR};
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 15px;
  color:${COLOR.FONT_COLOR};
`;

export const MusicPlayerContainer = styled.div`
  width: 100%;
  background: ${COLOR.BACKGROUND_COLOR};
  margin-top: 20px;
  border-radius: 10px;
  padding: 25px;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

export const CoverImg = styled.img`
  width: 100%;
  position: absolute;
  object-fit: cover;
  height: 100%;
`;

export const MusicTitle = styled.p`
  font-size: 15px;
  color: white;
  font-weight: 600;
  margin-top: 20px;
  line-height: 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 80%;
  object-fit: cover;
`;

export const ProfileName = styled.p`
  color: ${COLOR.FONT_COLOR};
  font-size: 14px;
  margin-left: 10px;
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 17px;
  i {
    transition:0.5s;
    color: ${COLOR.FONT_COLOR};
    cursor: pointer;
    &:hover{
        color:white;
    }
  }
`;
