import styled from "styled-components";
import { COLOR, WIDTH } from "../../style";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: ${WIDTH};
  padding-top: 25px;
  display: flex;
  align-items: center;
  .active {
    /* border-bottom: 2px solid white; */
    ::before{
      left:0%;
  }
  }
`;

export const Logo = styled.span`
  font-size: 28px;
  font-family: Freestyle Script;
  b {
    color: #c25892;
    &:last-of-type {
      color: #5e4eca;
    }
  }
`;

export const SearchBar = styled.div`
  width: 300px;
  height: 35px;
  background-color: #191919;
  margin-left: 30px;
  border-radius: 24px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  i {
    color: gray;
    font-size: 13px;
  }
`;

export const SearchInput = styled.input`
  font-size: 12px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: gray;
  margin-left: 10px;
`;

export const Menu = styled(NavLink)`
  color: white;
  font-size: 13px;
  padding-bottom: 15px;
  margin-left: 70px;
  position:relative;
  overflow:hidden;
  &:first-of-type {
    margin: 0;
  }
  i {
    color: ${COLOR.YELLOW};
    margin-left: 5px;
  }
  ::before{
      content:"";
      color:blue;
      width:100%;
      height:15px;
      position:absolute;
      left:0%;
      transition:0.5s;
      bottom:0;
      border-bottom:2px solid white;
      left:-100%
  }
  :hover::before{
      left:0%;
  }
`;
