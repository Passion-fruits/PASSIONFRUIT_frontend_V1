import styled from "styled-components";
import { COLOR } from "../../../style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top:50px;
  border-bottom:1px solid rgb(70,70,70);
  padding-bottom:30px;
  :first-of-type{
      margin-top:0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 80%;
  object-fit: cover;
`;

export const ProfileName = styled.span`
  color: white;
  font-size: 16px;
  margin-left: 10px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const CoverImg = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
`;

export const MusicInforContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  box-sizing: border-box;
  position:relative;
  height:200px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
`;

export const Genre = styled.div`
  padding: 7px 14px;
  background: ${COLOR.YELLOW};
  color: black;
  font-weight: 700;
  font-size: 10px;
  border-radius: 24px;
  margin-left: 10px;
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
  line-height:19px;
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
`;

export const BtnContainer = styled.div`
display:flex;
bottom:10px;
position:absolute;
`

export const Btn = styled.button`
padding:3px 16px;
background:white;
border:none;
border-radius:2px;
color:gray;
font-size:12px;
font-weight:600;
margin-left:10px;
:first-of-type{
    margin-left:0;
}
i{
    color:gray;
}
`