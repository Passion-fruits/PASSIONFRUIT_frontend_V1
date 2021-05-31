import styled from "styled-components";
import { COLOR } from "../../../../style";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  border: 1px solid rgb(20, 20, 20);
`;

export const CoverImg = styled.img`
  width: 100%;
  position: absolute;
  object-fit: cover;
  height: 100%;
`;

export const Title = styled.p`
  color: white;
  font-weight: 600;
  padding: 20px 0 0 0;
  font-size: 21px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  padding: 10px 0 20px 0;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 80%;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProfileName = styled.span`
  color: ${COLOR.FONT_COLOR};
  font-size: 13px;
  text-transform: capitalize;
`;

export const PlayBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${COLOR.BACKGROUND_COLOR};
  border-radius: 24px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: 20%;
  background-color: ${COLOR.MAIN_COLOR};
`;

export const BtnContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    transition: 0.3s;
    cursor: pointer;
    color: rgb(100, 100, 100);
    :hover {
      color: rgb(200, 200, 200);
    }
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 30%;
  overflow-y: scroll;
  margin-top: 10px;
  ::-webkit-scrollbar {
    width: 2px;
    background-color: ${COLOR.BACKGROUND_COLOR};
    border-radius: 24px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLOR.MAIN_COLOR};
  }
`;

export const Comment = styled.div`
  width: 97%;
  padding: 12px 15px;
  box-sizing: border-box;
  background-color: ${COLOR.BACKGROUND_COLOR};
  border-radius: 5px;
  color: ${COLOR.FONT_COLOR};
  font-size: 14px;
  margin-bottom: 14px;
  letter-spacing: 1px;
  line-height: 23px;
`;

export const IntroMent = styled.div`
color:${COLOR.FONT_COLOR};
margin-bottom:15px;
font-size:14px;
width:100%;
display:flex;
justify-content:flex-end;
`