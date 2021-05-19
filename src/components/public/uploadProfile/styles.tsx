import styled from "styled-components";

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

export const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 80%;
  cursor: pointer;
  object-fit:cover;
  border:2px solid rgb(25,25,25);
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