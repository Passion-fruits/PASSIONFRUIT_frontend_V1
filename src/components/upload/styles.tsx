import styled from "styled-components";
import { COLOR } from "../../style";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-between;
`;

export const InpContainer = styled.div`
  width: 65%;
`;

export const InforWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  :first-of-type {
    margin: 0;
  }
`;

export const InforTitle = styled.span`
  color: white;
  font-size: 13px;
  margin-bottom: 18px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #707070;
  background: transparent;
  padding-bottom: 6px;
  color: gray;
  cursor: pointer;
  transition: 0.5s;
  ::placeholder {
    transition: 0.5s;
  }
  :focus {
    border-bottom: 1px solid ${COLOR.MAIN_COLOR};
    color: ${COLOR.MAIN_COLOR};
  }
  :focus::placeholder {
    color: ${COLOR.MAIN_COLOR};
  }
`;

export const Select = styled.select`
  width: 180px;
  height: 32px;
  background-color: #232323;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  color: gray;
  ::-ms-expand {
    display: none;
  }
  &option {
    border: none;
    color: gray;
  }
`;

export const SoundCloudBox = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${COLOR.MAIN_COLOR};
  color: white;
  font-size: 12px;
  cursor: pointer;
  transition: 0.5s;
  i {
    margin-right: 5px;
    font-size: 15px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${COLOR.MAIN_COLOR};
  border: none;
  border-radius: 3px;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  transition: 0.5s;
  :hover {
    opacity: 0.8;
  }
`;

export const AlertSpan = styled.span`
  color: gray;
  font-size: 13px;
`;
