import styled from "styled-components";
import { COLOR } from "../../../style";

export const Wrapper = styled.div`
  width: 230px;
  position: fixed;
  height: 800px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectTitle = styled.label`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const SelectBox = styled.select`
  outline: none;
  width: 100%;
  padding: 7px 25px;
  background: ${COLOR.BACKGROUND_COLOR};
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  color: ${COLOR.FONT_COLOR};
`;

/* 선택 박스 */
export const SelectContainer = styled.div`
  width: 100%;
  height: 35px;
  overflow: hidden;
  background: ${COLOR.BACKGROUND_COLOR};
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 14px;
  transition: 0.5s;
`;

export const SelectVal = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.3s;
  * {
    transition: 0.5s;
    color: ${COLOR.FONT_COLOR};
  }
  span {
    margin-left: 20px;
  }
  i {
    position: absolute;
    right: 20px;
  }
  :hover {
    background: rgb(50, 50, 50);
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  display: flex;
  align-items: center;
  :hover {
    background: rgb(10, 10, 10);
  }
`;

export const MusicPlayerContainer = styled.div`
  width: 100%;
  background: ${COLOR.BACKGROUND_COLOR};
  margin-top: 20px;
  border-radius: 10px;
  padding: 25px;
  box-sizing: border-box;
  margin-bottom: 200px;
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
    transition: 0.5s;
    color: ${COLOR.FONT_COLOR};
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
