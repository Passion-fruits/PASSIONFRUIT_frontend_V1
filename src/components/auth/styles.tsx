import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, INP_COLOR, WIDTH } from "../../style";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${WIDTH};
  height: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: Bold;
  margin-top: 170px;
`;

export const SubTitle = styled.p`
  color: gray;
  font-size: 14px;
  margin-top: 15px;
`;

export const Input = styled.input`
  width: 350px;
  height: 45px;
  background-color: #191919;
  border: none;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 30px;
  box-sizing: border-box;
  color: ${INP_COLOR};
  ::placeholder {
    color: gray;
  }
  :first-of-type {
    margin-top: 30px;
  }
`;

export const SubBtn = styled.button`
  width: 350px;
  height: 45px;
  background-color: ${COLOR.MAIN_COLOR};
  margin-top: 25px;
  border: none;
  font-weight: 600;
  color: white;
  font-size: 17px;
  border-radius: 5px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

export const BottomSpan = styled(Link)`
  color: gray;
  text-decoration: underline;
  font-size: 13px;
  margin-top: 40px;
  cursor: pointer;
`;

export const SignUpContainer = styled.div`
  width: 600px;
  height: 450px;
`;

export const AddImg = styled.div`
  width: 180px;
  height: 180px;
  border: 2px dotted gray;
  border-radius: 80%;
  font-size: 80px;
  line-height: 180px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: rgb(255, 255, 255, 0.1);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &input {
    width: 100%;
  }
`;

export const InpWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  &input {
    margin-top: 15px;
  }
`;

export const Square = styled.div`
  position: absolute;
  background: gray;
  width: 20%;
  height: 2px;
  &:last-of-type {
    transform: rotate(90deg);
  }
`;

export const CheckContainer = styled.div`
float:right;
margin-top:30px;
display:flex;
justify-content:flex-end;
font-size:12px;
span{color:gray}
`